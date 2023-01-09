import React from 'react'
import { HiOutlineArrowLeft } from 'react-icons/hi'
import { TextLink, WrapperLink } from './Styled'

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