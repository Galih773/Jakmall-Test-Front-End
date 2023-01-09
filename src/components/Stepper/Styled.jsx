import { HiChevronRight } from 'react-icons/hi'
import { NavLink} from 'react-router-dom'
import styled from 'styled-components'

export const StepperContainer = styled.div`
    width: 100%;
    height: 50px;
    background-color: #FFFAE6;
    border-radius: 10px;
    top: 10px;
    display: flex;
    margin: 0 auto 20px;
    align-items: center;
    display: flex;
    justify-content: center;

    @media (min-width: 600px) {
        width: 500px;
        height: 70px;
        top: -35px;
        position: absolute;
        left: 0;
        right: 0;
        bottom: 0;
        border-radius: 35px;
        margin: 0 auto 0;
    }
`

export const Arrow = styled(HiChevronRight)`
    font-size: 11px;
    color: #FF8A00;

    @media (min-width: 600px) {
        font-size: 20px;
    }
`


export const Steps = styled(NavLink)`
    display: flex;
    align-items: center;
    color: #FF8A00;
    font-weight: 500;
    padding: 0 15px 0 15px;
    font-size: 14px;

    @media (min-width: 600px) {
      padding: 0 24.5px 0 24.5px;
      font-size: 16px;
    }
`
export const StepNumber = styled.div`
    width: 20px;
    height: 20px;
    background-color: ${(props) => props.className === 'active' ? "#FF8A00" : "#FF8A004A"};
    color: ${(props) => props.className === 'active' ? "white" : "#FF8A00"};
    border-radius: 50%;
    text-align: center;
    display: flex;
    justify-content: center;
    flex-direction: column;
    margin-right: 5px;

    @media (min-width: 600px) {
        width: 30px;
        height: 30px;
        text-align: center;
        display: flex;
        margin-right: 10px;
    }
`