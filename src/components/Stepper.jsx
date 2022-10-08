import React from 'react'
import {HiChevronRight} from 'react-icons/hi'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

const StepperContainer = styled.div`
width: 500px;
height: 70px;
background-color: #FFFAE6;
border-radius: 35px;
position: relative;
top: -35px;
margin: auto;
display: flex;
align-items: center;

.arrow {
    font-size: 20px;
    color: #FF8A00;
}
`

const Steps = styled.div`
display: flex;
align-items: center;
color: #FF8A00;
font-weight: 500;
padding: 0 24.5px 0 24.5px;
font-size: 16px;

div{
    width: 30px;
    height: 30px;
    background-color: #FF8A00;
    color: white;
    border-radius: 50%;
    text-align: center;
    display: flex;
    justify-content: center;
    flex-direction: column;
    margin-right: 10px;
}
`

const Stepper = () => (

    <StepperContainer>

        <NavLink to="/">
        <Steps>
            <div>
                <span>1</span>
            </div>
            <p>
                Delivery
            </p>
        </Steps>
        </NavLink>
        <HiChevronRight className='arrow'/>
        <NavLink  to="/payment">
        <Steps>
            <div>
                <span>2</span>
            </div>
            <p>
                Payment
            </p>
        </Steps>
        </NavLink>
        <HiChevronRight className='arrow'/>
        <NavLink to="/finish">
        <Steps>
            <div>
                <span>3</span>
            </div>
            <p>
                Finish
            </p>
        </Steps>
        </NavLink>
        
        
    </StepperContainer>
)

export default Stepper