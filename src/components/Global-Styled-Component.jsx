import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    position: relative;
    min-height: 100vh;
    background-color: #fff;
    border-radius: 5px;
    box-shadow: 2px 10px 20px rgba(255, 138, 0, 0.1);
    font-family: 'Montserrat';
    padding: 30px 20px 20px 20px;

    @media (min-width: 600px) {
        width: 100%;
        background-color: #fff;
        min-height: 100%;
        margin: 50px auto; 
        padding: 40px;
    }
    
    @media (min-width: 1100px) {
        width: 1100px;
        height: 550px;
        background-color: #fff;
        margin: 50px auto; 
        padding: 40px;
    }
`
export const WrapperSection = styled.div`
    width: 100%;
    height: fit-content;
    margin-top: ${(props) => props.top ? props.top : "20px"};

    @media (min-width: 1100px) {
        display: flex;
        width: 1060px;
        height: 458px;
        margin-top: ${(props) => props.top ? props.top : "20px"};
        justify-content: space-between;
    }

`

export const MainSection = styled.div`
    width: 100%;
    margin-top: ${(props)=> props.top ? props.top : "0"};
`

export const MainTitle = styled.h1`
    font-size: 30px;
    font-weight: 700;
    color: #FF8A00;
    margin-bottom: 20px;

    @media (min-width: 600px) {
        font-size: 36px;
        margin-bottom: 0;
    }

`
export const SummarySection = styled.div`
    width: 100%;
    min-height: 300px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border-top: 1.5px solid rgba(255, 138, 0, 0.3);
    padding: 10px 0px 0 0px;

    .detail-payment{
        margin-top: 30px;
    }

    h2{
        font-size: 24px;
        color: #FF8A00;
        font-weight: 700;
    }

    .item {
        font-size: 14px;
        font-weight: 400;
        margin-top: 10px;
    }

    @media (min-width: 600px) {
        margin-top: 20px;
    }

    @media (min-width: 1100px) {
        width: 340px;
        height: 460px;
        border-left: 1.5px solid rgba(255, 138, 0, 0.3);
        border-top: none;
        padding: 10px 15px 0 15px;
        margin-top: 0;
        .detail-payment{
            margin-top: 0px;
        }
    }
`
export const DetailItem = styled.div`
    display: flex;
    justify-content: space-between;
    font-size: 14px;
    font-weight: 400;
    margin-top: 10px;

    .price{
        font-weight: bold;
    }
`
export const TotalPrice = styled.div`
    font-size: 24px;
    color: #FF8A00;
    display: flex;
    justify-content: space-between;
    font-weight: 700;
    margin-top: 20px;
    margin-bottom: 20px;
`
export const ButtonPayment = styled.button`
    width: 100%;
    height: 60px;
    padding: 20px 25px;
    background-color: #FF8A00;
    border: none;
    color: white;
    font-size: 16px;
    font-weight: 500;
    cursor: pointer;

    @media (min-width: 1100px) {
        width: 260px;
    }
`
export const ShipPayment = styled.div`
    margin-top: 20px;
    font-size: 14px;
    font-weight: 500;

    span{
        display:block;
        width:80px;
        border-top: 2px solid #D8D8D8;
    }

    div{
        margin-top: 20px;
    }

    .detail{
        color: #1BD97B;
        font-size: 16px;
    }
`