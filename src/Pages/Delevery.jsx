import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { HiOutlineArrowLeft } from 'react-icons/hi'
import styled from 'styled-components'
import Checkbox from '../components/Checkbox'
import Stepper from '../components/Stepper'
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { BackLink, ButtonPayment, Container, DetailItem, MainSection, MainTitle, SummarySection, TotalPrice } from '../style/Styled-Component'
import { useNavigate } from 'react-router-dom'

const schema = yup.object({
    name: yup.string().required(),
    phone: yup.string().required(),
    address: yup.string().max(120).required(),
});

const Delevery = () => {
    
    const [checked, setChecked] = useState(false)
    const { register, handleSubmit, formState: { errors }, trigger } = useForm({
        resolver: yupResolver(schema),
    });
    const navigate = useNavigate()
    const onSubmit = () => {
    navigate("/payment")};

    const handleCheckboxChange = (event) => {
      setChecked(event.target.checked)
    }
  
    const Head = styled.div`
      display: flex;
      justify-content: space-between;
      align-items: center;
    `
    const InputStyle = styled.div`
      width: 100%;
      padding: 28px 15px 10px 15px;
      border: 1px solid ${(props) => props.err ? "red" : "#1BD97B"};;
      position: relative;
      margin-bottom: 10px;
  
      input, .area{
        width: 100%;
        display: block;
        background: transparent;
        border: none;
        outline: none;
        color: black;
        font-size: 16px;
        ${(props) => props.check === false ? "pointer-events: none" : ""};
      }
  
      .area{
        height: 90px;
      }
  
      input:focus + label, input:required:valid + label, .area:focus + label, .area:required:valid + label{
          color: #1BD97B;
          font-size: 13px;
          transform: translateY(10px);
      }
  
      label{
        position: absolute;
        top: 0;
        color: black;
        font-size: 16px;
        font-weight: 400;
        ${(props) => props.check === false? "pointer-events: none" : ""};
        transform: translateY(20px);
        transition: all 400ms ease-in-out;
      }
    `

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
                  <InputStyle>
                    <input id="name" type="text" {...register("name")} required/>
                    <label htmlFor="name">Name</label>
                  </InputStyle>
                  <InputStyle>
                    <input id="phone" type="tel" {...register("phone")} required/>
                    <label htmlFor="phone">Phone Number</label>
                  </InputStyle>
                  <InputStyle>
                    <textarea className="area" {...register("address")} id="address" type="text" required/>
                    <label htmlFor="address">Delivery Address</label>
                  </InputStyle>
                </div>
                <div style={{width: "270px"}}>
                  <InputStyle check={checked}>
                    <input  id="dropshipperName" {...register("dropshipperName")} type="text" required/>
                    <label htmlFor="dropshipperName">Dropshipper Name</label>
                  </InputStyle>
                  <InputStyle check={checked}>
                    <input  id="dropshipperPhone" {...register("dropshipperPhone")} type="tel" required/>
                    <label htmlFor="dropshipperPhone">Dropshipper Phone Number</label>
                  </InputStyle>
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
                <p className="price">500,000</p>
              </DetailItem>
              <DetailItem>
                <p>Dropshipping Fee</p>
                <p className="price">5,900</p>
              </DetailItem>
              <TotalPrice>
                <p>Total</p>
                <p>505,900</p>
              </TotalPrice>
              <ButtonPayment onClick={onSubmit}>Continue to Payment</ButtonPayment>
            </div>
  
          </SummarySection>
        </MainSection>
  
      </Container>
    )
}

export default Delevery