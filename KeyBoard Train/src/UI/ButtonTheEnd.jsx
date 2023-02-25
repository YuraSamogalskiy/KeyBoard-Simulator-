import React from 'react'
import styled from 'styled-components'
import Flex from '../components/Flex'

const StyledButtonTheEnd = styled.button`
  background-color: #9e9797b0;
  color: #252525;
  cursor: pointer;
  border: none;
  margin-left: 1rem;
  margin: 1rem;
  padding: 0.5rem;
  border-radius: 0.2rem;
  font-weight: 700;
  box-shadow: 0 1px 5px 0 rgba(0, 0, 0, 0.486),
    0 1px 13px 0 rgba(0, 0, 0, 0.664);
`

const ButtonTheEnd = ({
  handleClickReturnWords,
  handleClickNewChangeWords,
}) => {
  return (
    <h1>
      <Flex wrap="nowrap" justify="center" direction="row">
        <StyledButtonTheEnd onClick={handleClickReturnWords}>
          Return
        </StyledButtonTheEnd>

        <StyledButtonTheEnd
          onClick={() =>
            handleClickNewChangeWords(Math.round(Math.random() * 100 + 1))
          }
        >
          New Generate
        </StyledButtonTheEnd>
      </Flex>
    </h1>
  )
}

export default ButtonTheEnd
