import React from 'react'
import styled from 'styled-components'

const StyledTitle = styled.h1`
  color: ${(props) => props.color};
  font-weight: ${(props) => props.fontWeight || 400};
  background-color: ${(props) => props.backColor || 'none'};
  padding: ${(props) => props.padding || 'none'};
  box-shadow: ${({ shadow }) => shadow || 'none'};
  font-size: ${({ size }) => size || 'none'};
`

const Title = (props) => {
  return <StyledTitle {...props} />
}

export default Title
