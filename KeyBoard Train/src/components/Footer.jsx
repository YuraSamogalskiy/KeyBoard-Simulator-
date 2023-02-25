import React from 'react'
import styled from 'styled-components'
import Flex from './Flex'
import Title from './Title'

const StyledFooter = styled.div`
  background-color: none;
  color: #fff;
  font-size: 0.8rem;
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 50px;
`

const Footer = (props) => {
  return (
    <StyledFooter {...props}>
      <Flex justify="center" align="flex-start" alignContent="center">
        <Title fontWeight="400" size="0.9rem" color="#c0c0c0">
          Ctrl+Enter : Return current session
        </Title>
        <Title fontWeight="400" size="0.9rem" color="#c0c0c0">
          Ctrl+alt : Change current session
        </Title>
      </Flex>
    </StyledFooter>
  )
}

export default Footer
