import styled from "styled-components";
import { NavLink } from 'react-router-dom'

export const WrapperLink = styled(NavLink)`
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
export const TextLink = styled.p`
    margin-left: 6px;

    @media (min-width: 768px) {
        
        margin-left: 10px;

    }
`