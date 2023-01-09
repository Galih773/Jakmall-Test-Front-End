import styled from "styled-components"

export const Thankyou = styled.div`
    width:100%;
    display: flex;
    align-items: center;
    flex-direction: column;
    text-align: center;
    margin: 40px auto 30px;

    @media (min-width: 768px) {
        display: block;
        width: 350px;
        margin: 70px auto 0;
        text-align: left;
    }
`
export const Message = styled.div`
    margin-top: 30px;
    font-size: 14px;
    font-weight: 400;
    margin-bottom: 40px;
`

export const OrderId = styled.p`
    font-weight: 500;
    margin-bottom: 10px;   
`