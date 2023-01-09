import styled from 'styled-components'

export const CheckboxContainer = styled.div`
  display: inline-block;
  vertical-align: middle;
`

export const Icon = styled.svg`
  fill: none;
  stroke: #1BD97B;
  stroke-width: 2px;
`
export const HiddenCheckbox = styled.input.attrs({ type: 'checkbox' })`
  border: 0;
  clip: rect(0 0 0 0);
  /* clippath: inset(50%); */
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`

export const StyledCheckbox = styled.div`
  display: inline-block;
  width: 15px;
  height: 15px;
  background: white;
  border: 2px solid ${props => (props.checked ? '#1BD97B' : '#CCCCCC')};
  /* transition: all 150ms; */

  ${Icon} {
    visibility: ${props => (props.checked ? 'visible' : 'hidden')}
  }

  @media (min-width: 768px) {
    width: 20px;
    height: 20px;
  }
`