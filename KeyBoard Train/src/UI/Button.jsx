import React from 'react'
import styled from 'styled-components'
import Flex from '../components/Flex'

const buttonsOfCountWords = [10, 20, 30, 40]

const StyledButton = styled.button`
  width: 2rem;
  padding: 0.3rem;
  margin: 0.5rem;
  background-color: #9e9797b0;
  color: #252525;
  font-weight: 700;
  cursor: pointer;
  border: none;
  border-radius: 0.2rem;
  box-shadow: 0 1px 5px 0 rgba(0, 0, 0, 0.486),
    0 1px 13px 0 rgba(0, 0, 0, 0.664);
`

const Button = ({ handleClickChangeWords }) => {
  return (
    <Flex
      justify="flex-end"
      align="center"
      wrap="wrap"
      width="100%"
      direction="row"
      paddingRight="4rem"
    >
      {buttonsOfCountWords.map((data) => {
        return (
          <StyledButton key={data} onClick={() => handleClickChangeWords(data)}>
            {data}
          </StyledButton>
        )
      })}
    </Flex>
  )
}

export default Button
