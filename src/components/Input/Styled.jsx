import styled from "styled-components";


export const ContainerInput = styled.div`
  width: 100%;
  position: relative;
  margin-bottom: 10px;
`

export const StyledLabel = styled.label`
    position: absolute;
    top: 0;
    color: ${(props) => props.check === false ? "#CCCCCC" : "black"};;
    font-size: 16px;
    font-weight: 400;
    ${(props) => props.check === false ? "pointer-events: none" : ""};
    transform: translate(20px, 20px);
    transition: all 400ms ease-in-out;
`

export const Mark = styled.div`
    position: absolute;
    top: 34%;
    right: 2%;
    font-size: large;
    color: ${(props) => props.err ? "#FF8A00" : "#1BD97B"};
`

export const StyledInput = styled.input`
    width: 100%;
    display: block;
    background: transparent;
    border: none;
    outline: none;
    color: black;
    padding: 28px 25px 10px 15px;
    border: 1px solid #CCCCCC;
    font-size: 16px;
    ${(props) => props.check === false ? "pointer-events: none" : ""};
    ${(props) => props.as === "textarea" ? "height: 90px" : ""};

    &:focus + ${StyledLabel}, &:required:valid + ${StyledLabel} {
        color: ${(props) => props.err ? "#FF8A00" : "#1BD97B"};
        font-size: 13px;
        transform: translate(15px, 10px);
    }

    &:not(:focus) ~ ${Mark} {
        display: none;
    }

    &:required:valid ~ ${Mark} {
        display: block;
    }

    &:focus, &:required:valid {
        border: 1px solid ${(props) => props.err ? "#FF8A00" : "#1BD97B"};
    }
`