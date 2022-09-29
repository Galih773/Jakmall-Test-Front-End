import React, { useState } from 'react'
import { HiOutlineArrowLeft } from 'react-icons/hi'
import {FcCheckmark} from 'react-icons/fc'
import { NavLink, useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import Stepper from '../components/Stepper'
import { BackLink, ButtonPayment, Container, DetailItem, MainSection, MainTitle, ShipPayment, SummarySection, TotalPrice } from '../style/Styled-Component'
import { ListShipment, ListPayment} from '../Static/StaticList'

const Payment = () => {
    const [shipment, setShipment] = useState(ListShipment[0])
    const [payment, SetPayment] = useState("e-Wallet")
    const navigate = useNavigate()

    const onSubmit = () => {
        navigate("/finish")
    }

    const changeShipment = (shipp) => {
        setShipment({...shipment, name:shipp.name, price:shipp.price, estimate:shipp.estimate})
    }

    const changePayment = (pay) => {
        SetPayment(pay)
    }

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
    const rupiah = (number)=>{
        return new Intl.NumberFormat("id-ID", {
          style: "currency",
          currency: "IDR"
        }).format(number);
      }

  return (
    <Container>
        <Stepper />

        <NavLink to="/">
            <BackLink top="-35px" left="40px">
                <HiOutlineArrowLeft />
                <p>Back to delivery</p>
            </BackLink>
        </NavLink>

        <MainSection>
            <div style={{width: "100%"}}>
                <MainTitle>Shipment</MainTitle>
                {/* List Shipment */}
                <div style={{display: "flex"}}>
                    {ListShipment.map((shipp, index) => (
                        <Options key={index} onClick={()=>changeShipment(shipp)} name={shipp.name} set={shipment.name}>
                        <div>
                            <p className='shipment'>{shipp.name}</p>
                            <p className='price'>{rupiah(shipp.price)}</p>
                        </div>
                        {shipp.name === shipment.name ? <FcCheckmark /> : ""}
                        
                        </Options>

                    ))}
                    
                </div>
                <MainTitle>Payment</MainTitle>
                {/* List Shipment */}
                <div style={{display: "flex"}}>
                    {ListPayment.map((pay, index)=>(
                        <Options onClick={()=>changePayment(pay.name)} key={index} name={pay.name} set={payment}>
                            <div>
                                <p className={pay.name === "e-Wallet" ? "shipment" : "payment"}>{pay.name}</p>
                                {pay.name === "e-Wallet" ? <p className='price'>{pay.balance} left</p> : ""}
                                
                            </div>
                            {pay.name === payment ? <FcCheckmark /> : ""}
                        </Options>
                    ))}
                    
                </div>
            </div>
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
        </MainSection>
        
    </Container>
  )
}

export default Payment