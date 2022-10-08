import React, { useState } from 'react'
import { HiOutlineArrowLeft } from 'react-icons/hi'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import Stepper from '../components/Stepper'
import { BackLink, Container, DetailItem, MainSection, MainTitle, ShipPayment, SummarySection, TotalPrice } from '../style/Styled-Component'

const Thankyou = styled.div`
width: 350px;
margin: auto;
`
const Message = styled.div`
margin-top: 30px;
font-size: 14px;
font-weight: 400;

.order {
    font-weight: 500;
    margin-bottom: 10px;
}
`

const Finish = () => {

    const [shipment] = useState(JSON.parse(window.localStorage.getItem('payment')).shipment )
    const [payment] = useState(JSON.parse(window.localStorage.getItem('payment')).paymentType)
    const [randomId, setRandomId] = useState();

    const randomAlphaNumeric = (length, chars) => {
        var result = '';
        for (var i = length; i > 0; --i) result += chars[Math.floor(Math.random() * chars.length)];
        return result;
    }

    useState(()=>{
        setRandomId(randomAlphaNumeric(5, '23456789abcdefghijkmnopqrstuvwxyzABCDEFGHIJKLMNPQRSTUVWXYZ'))
    },[])

    const rupiah = (number)=>{
        return new Intl.NumberFormat("id-ID", {
          style: "currency",
          currency: "IDR"
        }).format(number);
    }

  return (
    <Container>
        <Stepper />

        <MainSection top="5px">
            <div style={{width: "100%", paddingTop: "70px"}}>
                <Thankyou>
                    <MainTitle>Thank you</MainTitle>
                    <Message>
                        <p className='order'>Order ID : {randomId}</p>
                        <p>Your order will be delivered today with GO-SEND</p>
                    </Message>
                    <NavLink to="/">
                        <BackLink top="70px" left="0px">
                            <HiOutlineArrowLeft />
                            <p>Go to homepage</p>
                        </BackLink>
                    </NavLink>
                </Thankyou>

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
                </div>
            </SummarySection>
        </MainSection>
        
    </Container>
  )
}

export default Finish