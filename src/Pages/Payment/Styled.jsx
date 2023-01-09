import styled from "styled-components"

export const WrapperOption = styled.div`
    display: flex;
    flex-wrap: wrap;
`

export const Options = styled.div`
    display: flex;
    margin: 0px 10px 20px 0;
    align-items: center;
    justify-content: space-between;
    cursor: pointer;
    width: 100%;
    height: 60px;
    border: solid ${(props) => props.name === props.set ? "2px rgba(27, 217, 123, 1)" : "1px #CCCCCC"};
    padding: 13px;
    display: flex;
    background-color: ${(props) => props.name === props.set ? "rgba(27, 217, 123, 0.1)" : "#fff"};

    div{
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
    .shipment{
        font-size: 13px;
        font-weight: 500;
    }

    .payment{
        font-size: 16px;
        font-weight: 500;
    }

    .price{
        font-size: 16px;
        font-weight: 700;
    }

    @media (min-width: 600px) {
        width: 180px;
        height: 60px;
        margin: 25px 10px 60px 0;
        
    }
`