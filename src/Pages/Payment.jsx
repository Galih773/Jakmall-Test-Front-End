import React, { useEffect, useState } from 'react'
import {FcCheckmark} from 'react-icons/fc'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import Stepper from '../components/Stepper'
import { ButtonPayment, Container, DetailItem, MainSection, MainTitle, ShipPayment, SummarySection, TotalPrice, WrapperSection } from '../components/Styled-Component'
import { ListShipment, ListPayment} from '../Static/StaticList'
import BackLink from '../components/BackLink'

const WrapperOption = styled.div`
    display: flex;
`

const Options = styled.div`
    display: flex;
    margin: 25px 0 60px 0;
    align-items: center;
    justify-content: space-between;
    cursor: pointer;
    width: 154px;
    height: 34px;
    border: solid ${(props) => props.name === props.set ? "2px rgba(27, 217, 123, 1)" : "1px #CCCCCC"};
    padding: 13px;
    display: flex;
    margin-right: 10px;
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
`

const Payment = () => {
    const [shipment, setShipment] = useState(window.localStorage.getItem('payment') ? JSON.parse(window.localStorage.getItem('payment')).shipment : ListShipment[0])
    const [payment, SetPayment] = useState(window.localStorage.getItem('payment') ? JSON.parse(window.localStorage.getItem('payment')).paymentType : "e-Wallet")
    const navigate = useNavigate()

    useEffect(()=>{
        window.localStorage.setItem('payment', JSON.stringify({shipment : shipment, paymentType : payment}));
        
    }, [payment, shipment])

    const onSubmit = () => {
        navigate("/finish")
    }

    const changeShipment = (shipp) => {
        setShipment({...shipment, name:shipp.name, price:shipp.price, estimate:shipp.estimate})
    }

    const changePayment = (pay) => {
        SetPayment(pay)
    }

    const rupiah = (number)=>{
        return new Intl.NumberFormat("id-ID", {
          style: "currency",
          currency: "IDR"
        }).format(number);
    }

  return (
    <Container>
        <Stepper />

        <BackLink to="/">
            Back to delivery
        </BackLink>
        
        <WrapperSection>
            <MainSection>
                <MainTitle>Shipment</MainTitle>
                
                <WrapperOption>
                    {ListShipment.map((shipp, index) => (
                        <Options key={index} onClick={()=>changeShipment(shipp)} name={shipp.name} set={shipment.name}>
                            <div>
                                <p className='shipment'>{shipp.name}</p>
                                <p className='price'>{rupiah(shipp.price)}</p>
                            </div>

                            {shipp.name === shipment.name ? <FcCheckmark /> : ""}
                        </Options>
                    ))}
                </WrapperOption>

                <MainTitle>Payment</MainTitle>
               
                <WrapperOption>
                    {ListPayment.map((pay, index)=>(
                        <Options onClick={()=>changePayment(pay.name)} key={index} name={pay.name} set={payment}>
                            <div>
                                <p className={pay.name === "e-Wallet" ? "shipment" : "payment"}>{pay.name}</p>
                                {pay.name === "e-Wallet" ? <p className='price'>{pay.balance} left</p> : ""}
                                
                            </div>

                            {pay.name === payment ? <FcCheckmark /> : ""}
                        </Options>
                    ))}  
                </WrapperOption>
            </MainSection>

            <SummarySection>
                <div>
                    <h2>Summary</h2>
                    <p className="item">10 items purchased</p>
                    <ShipPayment>
                        <span></span>
                        <div>
                            <p className='info'>Delivery estimation</p>
                            <p className='detail'>{shipment.estimate} by {shipment.name}</p>
                        </div>
                    </ShipPayment>
                    <ShipPayment>
                        <span></span>
                        <div>
                            <p className='info'>Payment method</p>
                            <p className='detail'>{payment}</p>
                        </div>
                    </ShipPayment>
                </div>
    
                <div className="detail-payment">
                    <DetailItem>
                        <p>Cost of goods</p>
                        <p className="price">Rp 500.000,00</p>
                    </DetailItem>
                    <DetailItem>
                        <p>Dropshipping Fee</p>
                        <p className="price">Rp 5.900,00</p>
                    </DetailItem>
                    <DetailItem>
                        <p><b>{shipment.name}</b> shipment</p>
                        <p className="price">{rupiah(shipment.price)}</p>
                    </DetailItem>
                    <TotalPrice>
                        <p>Total</p>
                        <p>{rupiah(505900+shipment.price)}</p>
                    </TotalPrice>
                    <ButtonPayment onClick={onSubmit}>Pay with {payment} </ButtonPayment>
                </div>
            </SummarySection>
        </WrapperSection>
    </Container>
  )
}

export default Payment