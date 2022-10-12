import React, { useState } from 'react'
import styled from 'styled-components'
import BackLink from '../components/BackLink'
import Stepper from '../components/Stepper'
import { Container, DetailItem, MainSection, MainTitle, ShipPayment, SummarySection, TotalPrice, WrapperSection } from '../components/Styled-Component'

const Thankyou = styled.div`
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
const Message = styled.div`
    margin-top: 30px;
    font-size: 14px;
    font-weight: 400;
    margin-bottom: 40px;

    .order {
        font-weight: 500;
        margin-bottom: 10px;
    }
`

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
                        <p className='order'>Order ID : {randomId}</p>
                        <p>Your order will be delivered today with GO-SEND</p>
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