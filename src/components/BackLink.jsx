import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import { HiOutlineArrowLeft } from 'react-icons/hi'

const WrapperLink = styled(NavLink)`
    display: flex;
    align-items: center;
    color: black;
    cursor: pointer;
    font-size: 16px;
    width: fit-content;

    @media (min-width: 768px) {
        font-size: 16px;
    }
`
const TextLink = styled.p`
    margin-left: 6px;

    @media (min-width: 768px) {
        
        margin-left: 10px;

    }
`

const BackLink = ({children, to, onClick}) => {

  return (
    <>
        <WrapperLink to={to} onClick={onClick}>
            <HiOutlineArrowLeft />
            <TextLink>{children}</TextLink>
        </WrapperLink>
    </>
  )
}

export default BackLink