import React, { useState } from 'react'
import { BackLink, Stepper } from '../../components'
import { Container, DetailItem, MainSection, MainTitle, ShipPayment, SummarySection, TotalPrice, WrapperSection } from '../../components/Global-Styled-Component'
import { Message, OrderId, Thankyou } from './Styled'

const Finish = () => {
  const order = JSON.parse(window.sessionStorage.getItem("order"))

  const [shipment] = useState(order.shipment )
  const [payment] = useState(order.payment)
  const [randomId] = useState(order.orderID);

  const rupiah = (number)=>{
      return new Intl.NumberFormat("id-ID", {
        style: "currency",
        currency: "IDR"
      }).format(number);
  }

  const resetOrder = () => {
      console.log("masuk")
      window.sessionStorage.removeItem("order")
  }

  return (
    <Container>
        <Stepper />

        <WrapperSection top="40px">
            <MainSection>
                <Thankyou>
                    <MainTitle>Thank you</MainTitle>

                    <Message>
                        <OrderId>Order ID : {randomId}</OrderId>
                        <p>Your order will be delivered today with {shipment.name}</p>
                    </Message>
                    
                    <BackLink to="/" onClick={resetOrder}>
                        Go to homepage
                    </BackLink>
                </Thankyou>
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
                </div>
            </SummarySection>
        </WrapperSection>
        
    </Container>
  )
}

export default Finish