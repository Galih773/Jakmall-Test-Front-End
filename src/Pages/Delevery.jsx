import React, { useEffect, useState } from 'react'
import useFormPersist from 'react-hook-form-persist'
import { useForm, FormProvider, useFormContext } from 'react-hook-form'
import { HiOutlineArrowLeft } from 'react-icons/hi'
import styled from 'styled-components'
import Checkbox from '../components/Checkbox'
import Stepper from '../components/Stepper'
import { BackLink, ButtonPayment, Container, DetailItem, MainSection, MainTitle, SummarySection, TotalPrice } from '../style/Styled-Component'
import { useNavigate } from 'react-router-dom'
import Input from '../components/Input'

const Head = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const Delevery = () => {
    
    const [checked, setChecked] = useState( JSON.parse(window.localStorage.getItem('checkDistributor') || false) )

    const { register, handleSubmit, formState: { errors }, trigger, resetField, setValue, watch } = useForm();

    useFormPersist('form', {watch, setValue});

    const navigate = useNavigate()

    useEffect(()=>{

      window.localStorage.setItem('checkDistributor', checked);

      if(checked === false){
        resetField("dropshipperName");
        resetField("dropshipperPhone");
      }

    }, [checked, resetField])

    const onSubmit = (data) => {
      console.log("halo")
      console.log(data)
      navigate("/payment")
    };

    const handleCheckboxChange = (event) => {
      setChecked(event.target.checked)
    }

    register('name', { 
      onChange: (e) => console.log(e.target.value , errors) 
    })

    const rupiah = (number)=>{
      return new Intl.NumberFormat("id-ID", {
        style: "currency",
        currency: "IDR"
      }).format(number);
    }

    return (
        <Container>
          <Stepper />
    
          <BackLink top="-35px" left="40px">
            <HiOutlineArrowLeft />
            <p>Back to cart</p>
          </BackLink>
    
          <MainSection>
            
              <form onSubmit={handleSubmit(onSubmit)} style={{width: "100%", marginRight: "30px"}}>
                  <Head>
                    <MainTitle>Delivery Details</MainTitle>
                    <label>
                      <Checkbox
                        checked={checked}
                        onChange={handleCheckboxChange}
                      />
                      <span style={{ marginLeft: 8 }}>Send as dropshipper</span>
                    </label>
                  </Head>
                  <div style={{display: "flex", paddingTop: "35px"}}>
                    <div style={{width: "370px", paddingRight: "70px"}}>
                      
                      <Input type="text" label="Name" name="name" register={register}></Input>

                      <Input type="tel" label="Phone Number" name="phone" register={register}></Input>
                      
                      <Input as="textarea" label="Delivery Address" name="address" register={register}></Input>

                    </div>
                    <div style={{width: "270px"}}>

                      <Input type="text" check={checked} label="Dropshipper Name" name="dropshipperName" register={register}></Input>

                      <Input type="text" check={checked} label="Dropshipper Phone Number" name="dropshipperPhone" register={register}></Input>

                    </div>
                  </div>
              </form>

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

                {checked ? 
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
          </MainSection>
  
      </Container>
    )
}

export default Delevery