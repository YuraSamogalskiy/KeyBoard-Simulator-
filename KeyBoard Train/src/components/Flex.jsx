import styled from 'styled-components'

const StyledFlex = styled.div`
  display: flex;
  flex-direction: ${(props) => props.direction || 'column'};
  align-items: ${(props) => props.align || 'stretch'};
  align-content: ${(props) => props.alignContent || 'stretch'};
  justify-content: ${(props) => props.justify || 'stretch'};
  flex-wrap: ${(props) => props.wrap || 'wrap'};
  margin-top: ${(props) => props.marginTop || '0'};
  margin-left: ${(props) => props.marginLeft || '0'};
  padding: ${({ padding }) => padding || '0'};
  padding-left: ${({ paddingLeft }) => paddingLeft || '0'};
  padding-right: ${({ paddingRight }) => paddingRight || '0'};
  width: ${({ width }) => width || '100%'};
  border: ${({ border }) => border || 'none'};
  border-radius: ${(props) => props.radius || 'none'};
  box-shadow: ${({ shadow }) => shadow || 'none'};
  height: ${({ height }) => height || 'none'};
`
function Flex(props) {
  return <StyledFlex {...props} />
}

export default Flex
