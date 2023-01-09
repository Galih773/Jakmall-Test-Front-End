import React, { useEffect, useState } from 'react'
import { FcCheckmark } from 'react-icons/fc'
import { useNavigate } from 'react-router-dom'
import { BackLink, Stepper } from '../../components'
import { ButtonPayment, Container, DetailItem, MainSection, MainTitle, ShipPayment, SummarySection, TotalPrice, WrapperSection } from '../../components/Global-Styled-Component'
import { ListPayment, ListShipment } from '../../Static/StaticList'
import { Options, WrapperOption } from './Styled'

const Payment = () => {
  const order = JSON.parse(window.sessionStorage.getItem("order"))

  const [shipment, setShipment] = useState(order.shipment !== undefined ? order.shipment : ListShipment[0])
  const [payment, SetPayment] = useState(order.payment !== undefined ? order.payment : "e-Wallet")
  const navigate = useNavigate()

  useEffect(()=>{
      order.shipment = shipment;
      order.payment = payment;
      window.sessionStorage.setItem('order', JSON.stringify(order))
      
  }, [order, payment, shipment])

  const randomAlphaNumeric = (length, chars) => {
      var result = '';
      for (var i = length; i > 0; --i) result += chars[Math.floor(Math.random() * chars.length)];
      return result;
  }

  const onSubmit = () => {
      order.orderID = randomAlphaNumeric(5, '23456789abcdefghijkmnopqrstuvwxyzABCDEFGHIJKLMNPQRSTUVWXYZ')
      window.sessionStorage.setItem('order', JSON.stringify(order))
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
        <Stepper submit={onSubmit}/>

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