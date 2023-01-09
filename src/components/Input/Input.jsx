import React from 'react'
import { FcCheckmark } from 'react-icons/fc'
import { HiOutlineX } from 'react-icons/hi'
import { ContainerInput, Mark, StyledInput, StyledLabel } from './Styled'

const Input = ({register, name, ...props}) => {
  return (
    <ContainerInput>
        <StyledInput {...props} id={name}  {...register(name)} required ></StyledInput>
        <StyledLabel check={props.check} htmlFor={name}>{props.label}</StyledLabel>
        {
            props.err ?
            <Mark err={props.err}>
                <HiOutlineX />
            </Mark> :
            <Mark err={props.err}>
                <FcCheckmark />
            </Mark>
        }
    </ContainerInput>
  )
}

export default Input