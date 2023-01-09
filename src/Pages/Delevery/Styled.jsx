import styled from "styled-components"

export const Head = styled.div`
  @media (min-width: 600px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`

export const Counter = styled.p`
  color: ${(props) => props.err ? "#FF8A00" : "#1BD97B"};
  font-size: 14px;
  margin-top: -5px;
  margin-left: 5px;
`

export const From = styled.form`

  @media (min-width: 1000px) {
    margin-right: 32px;
  }
`

export const ListInput = styled.div`
  padding-top: 10px;

  @media (min-width: 600px) {
    display: flex;
    justify-content: space-between;
    padding-top: 35px;
  }
`
export const UserInput = styled.div`
  width: 100%;

  @media (min-width: 600px) {
    width: 52%;
  }

  @media (min-width: 1100px) {
    width: 400px;
  }
`

export const DropshipperInput = styled.div`
  margin-top: 10px;
  width: 100%;

  @media (min-width: 600px) {
    width: 39%;
    margin-top: 0;
  }

  @media (min-width: 1100px) {
    width: 300px;
  }
`