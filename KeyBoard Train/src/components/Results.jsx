import React from 'react'
import styled from 'styled-components'
import Flex from './Flex'

const StyledResults = styled.div`
  width: 100%;
  margin-top: 1rem;
  color: #9e9797b0;
`

const Results = ({ FalseLengthWords, outgoingChars, precentOfTypeKey }) => {
  return (
    <StyledResults>
      <Flex direction="column" justify="center" align="baseline">
        <h1>False type key : {FalseLengthWords}</h1>
        <h1> WPM : {!!outgoingChars ? <>{precentOfTypeKey()}</> : <>0</>}</h1>
      </Flex>
    </StyledResults>
  )
}

export default Results
