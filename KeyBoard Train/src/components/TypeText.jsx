import styled from 'styled-components'

const StyledTextType = styled.span`
  background: ${(props) => props.backColor || 'none'};
  color: ${(props) => props.color || 'none'};
  border-radius: 0.9px;
`
const TypeText = (props) => {
  return <StyledTextType {...props} />
}

export default TypeText
