import React, { useEffect, useState } from 'react'
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { useForm } from 'react-hook-form';
import useFormPersist from 'react-hook-form-persist'
import { useNavigate } from 'react-router-dom';
import { ButtonPayment, Container, DetailItem, MainSection, MainTitle, SummarySection, TotalPrice, WrapperSection } from '../../components/Global-Styled-Component';
import { BackLink, Checkbox, Input, Stepper } from '../../components';
import { Counter, DropshipperInput, From, Head, ListInput, UserInput } from './Styled';

const schema = yup.object({
  email: yup.string().matches(/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/),
  phone: yup.string().matches(/^[0-9-+,]*$/).min(6).max(20),
  address: yup.string().max(120).required(),
  dropshipper: yup.boolean(),
  dropshipperName: yup.string().when('dropshipper', {
    is: true,
    then: yup.string().required()
  }),
  dropshipperPhone: yup.string().matches(/^[0-9-+,]*$/).min(6).max(20).when('dropshipper', {
    is: true,
    then: yup.string().required()
  }),
}).required();

const Develery = () => {
  const order = window.sessionStorage.getItem("order")

  const [checked, setChecked] = useState( order ? JSON.parse(order).dropshipper : false )
  
  const { register, handleSubmit, formState: { errors } , resetField, setValue, watch, getValues} = useForm({ mode: 'onChange',
    resolver: yupResolver(schema),
  });

  useFormPersist('order', {watch, setValue});

  const navigate = useNavigate()

  useEffect(()=>{

    if(checked === false){
      resetField("dropshipperName");
      resetField("dropshipperPhone");
      setValue('dropshipper', false);
      
    } else {
      setValue('dropshipper', true);
    }

  }, [checked, resetField, setValue, errors, getValues])

  const onSubmit = (data) => {
    navigate("/payment")
  };

  const handleCheckboxChange = (event) => {
    setChecked(event.target.checked)
  }

  const counter = (data) => {
    return data ? data.length : 0
  }

  const rupiah = (number)=>{
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR"
    }).format(number);
  }

  return (
    <Container>

        <Stepper submit={handleSubmit(onSubmit)}></Stepper>

        <BackLink>Back to cart</BackLink>

        <WrapperSection>
          <MainSection>
            <From onSubmit={handleSubmit(onSubmit)}>
                <Head>
                  <MainTitle>Delivery Details</MainTitle>

                  <label>
                    <Checkbox checked={checked} onChange={handleCheckboxChange} />
                    <span style={{ marginLeft: "8px" }}>Send as dropshipper</span>
                  </label>
                </Head>

                <ListInput>
                  <UserInput>
                    <Input err={errors.email} label="Email" name="email" register={register}></Input>

                    <Input err={errors.phone} label="Phone Number" name="phone" register={register}></Input>
                
                    <Input err={errors.address} as="textarea" label="Delivery Address" name="address" register={register}></Input>
                    
                    <Counter err={errors.address}>{counter(getValues('address'))}/120</Counter>
                  </UserInput>

                  <DropshipperInput>

                    <Input err={errors.dropshipperName} check={checked} label="Dropshipper Name" name="dropshipperName" register={register}></Input>

                    <Input err={errors.dropshipperPhone} check={checked} label="Dropshipper Phone Number" name="dropshipperPhone" register={register}></Input>

                  </DropshipperInput>
                </ListInput>
            </From>
          </MainSection>

          <SummarySection>
            <div>
              <h2>Summary</h2>
              <p className="item">10 items purchased</p>
            </div>

            <div className="detail-payment">
              <DetailItem>
                <p>Cost of goods</p>
                <p className="price">Rp 500.000,00</p>
              </DetailItem>

              {
                checked ? 
                <DetailItem>
                  <p>Dropshipping Fee</p>
                  <p className="price">Rp 5.900,00</p>
                </DetailItem>
                :
                <></>
              }

              <TotalPrice>
                <p>Total</p>
                <p>{checked ? rupiah(505900) : rupiah(500000)}</p>
              </TotalPrice>

              <ButtonPayment onClick={handleSubmit(onSubmit)}>Continue to Payment</ButtonPayment>
            </div>
          </SummarySection>
        </WrapperSection>

    </Container>
  )
}

export default Develery