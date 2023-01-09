import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';
import { Arrow, StepNumber, StepperContainer, Steps } from './Styled';

const Stepper = ({submit}) => {
  const location = useLocation();

  const [deleveryActive, setDeleveryActive] = useState(false)
  const [paymentActive, setPaymentActive] = useState(false)
  const [finishyActive, setFinishActive] = useState(false)

  useEffect(()=>{
      if(location.pathname === "/"){
          setDeleveryActive(true)
      } else if (location.pathname === "/payment") {
          setDeleveryActive(true)
          setPaymentActive(true)
      } else if (location.pathname === "/finish"){
          setDeleveryActive(true)
          setPaymentActive(true)
          setFinishActive(true)
      }
      
  },[location.pathname])

  return (
    <StepperContainer>

      <Steps to="/">
          <StepNumber className={deleveryActive ? "active" : "diactive"}>1</StepNumber>
          <p>Delivery</p>
      </Steps>
      
      <Arrow/>
      
      <Steps to="/payment" onClick={submit} >
          <StepNumber  className={paymentActive ? "active" : "diactive"}>2</StepNumber>
          <p>Payment</p>
      </Steps>
      
      <Arrow/>
      
      <Steps to="/finish" onClick={submit} >
          <StepNumber className={finishyActive ? "active" : "diactive"}>3</StepNumber>
          <p>Finish</p>
      </Steps>

  </StepperContainer>
  )
}

export default Stepper