import React from 'react'
import { HiOutlineArrowLeft } from 'react-icons/hi'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import Stepper from '../components/Stepper'
import { BackLink, Container, DetailItem, MainSection, MainTitle, ShipPayment, SummarySection, TotalPrice } from '../style/Styled-Component'

const Finish = () => {
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
  return (
    <Container>
        <Stepper />

        <MainSection top="5px">
            <div style={{width: "100%", paddingTop: "70px"}}>
                <Thankyou>
                    <MainTitle>Thank you</MainTitle>
                    <Message>
                        <p className='order'>Order ID : XXKYB</p>
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
                            <p className='detail'>today by GO-SEND</p>
                        </div>
                    </ShipPayment>
                    <ShipPayment>
                        <span></span>
                        <div>
                            <p className='info'>Payment method</p>
                            <p className='detail'>Bank Transfer</p>
                        </div>
                    </ShipPayment>
                </div>

                <div className="detail-payment">
                    <DetailItem>
                        <p>Cost of goods</p>
                        <p className="price">500,000</p>
                    </DetailItem>
                    <DetailItem>
                        <p>Dropshipping Fee</p>
                        <p className="price">5,900</p>
                    </DetailItem>
                    <DetailItem>
                        <p><b>GO-SEND</b> shipment</p>
                        <p className="price">15,000</p>
                    </DetailItem>
                    <TotalPrice>
                        <p>Total</p>
                        <p>520,900</p>
                    </TotalPrice>
                </div>
            </SummarySection>
        </MainSection>
        
    </Container>
  )
}

export default Finish