import { useContext, useState } from 'react'
import generateWords from '../utils/genereateWords'
import useKeyPress from '../hooks/useKeyPress'
import ResultBarContext from '../contex/ResultBarContex'
import styled from 'styled-components'
import Flex from './Flex'
import TypeText from './TypeText'
import Button from '../UI/Button'
import Results from './Results'
import Title from './Title'
import ButtonTheEnd from '../UI/ButtonTheEnd'

const StyledConsoleText = styled.p`
  box-sizing: border-box;
  padding: 2rem;
  font-size: 1.4rem;
  color: rgba(218, 218, 218, 0.9);
  white-space: normal;
  text-align: left;
`

const ConsoleText = () => {
  const { resultBar, setResultBar } = useContext(ResultBarContext)
  const [generateWord, SetGenerateWord] = useState(
    generateWords(5).toLowerCase()
  )
  const [FalseLengthWords, setFalseLengthWords] = useState(0)
  const [outgoingChars, setOutgoingChars] = useState('')
  const [currentChar, setCurrentChar] = useState(generateWord.charAt(0))
  const [incomingChars, setIncomingChars] = useState(
    generateWord.substring(1) + ''
  )
  const [pushedKey, setPushedKey] = useState('')

  const handleClickNewChangeWords = (count) => {
    let updateGenerate = generateWords(count).toLowerCase()

    SetGenerateWord(updateGenerate.toLowerCase())
    setOutgoingChars('')
    setCurrentChar(updateGenerate.charAt(0))
    setIncomingChars(updateGenerate.substring(1))
    setFalseLengthWords(0)
    // setPushedKey('')
  }

  const handleClickReturnWords = () => {
    SetGenerateWord(generateWord)
    setOutgoingChars('')
    setCurrentChar(generateWord.charAt(0))
    setIncomingChars(generateWord.substring(1))
    setFalseLengthWords(0)
    // setPushedKey('')
  }

  useKeyPress((key) => {
    let updatedOutgoingChars = outgoingChars
    let updatedIncomingChars = incomingChars
    setPushedKey(key)
    // setPushedKey(key + pushedKey)

    if (key === currentChar) {
      updatedOutgoingChars += currentChar

      setOutgoingChars(updatedOutgoingChars)

      setCurrentChar(incomingChars.charAt(0))

      updatedIncomingChars = incomingChars.substring(1)

      setIncomingChars(updatedIncomingChars)
    }
    if (key !== currentChar) {
      if (key.length === 1) {
        setFalseLengthWords(FalseLengthWords + 1)
        // setIncomingChars(pushedKey + incomingChars)
      }
    }
    if (key === 'Backspace') {
      if (outgoingChars.length > 0) {
        setOutgoingChars(outgoingChars.slice(0, -1))
        setIncomingChars(currentChar + incomingChars)
        setCurrentChar(outgoingChars.slice(-1))
      }
    }
    if (key === 'Control+Enter' || key === 'Home') {
      handleClickReturnWords()
    }
    if (key === 'Control+Alt') {
      let randNumForCtrlTab = Math.round(Math.random() * 100 + 1)
      handleClickNewChangeWords(randNumForCtrlTab)
    }
    // console.log(key)
  })

  const precentOfTypeKey = () => {
    let result = (outgoingChars.length / FalseLengthWords) * 100
    if (result >= 100) {
      result = 100
    }
    return result
  }
  // console.log(outgoingChars)
  // console.log(currentChar)
  // console.log(currentChar + incomingChars)
  // console.log(FalseLengthWords)
  // console.log(pushedKey)
  console.log(outgoingChars.split('').reverse().join('').charAt(0))
  console.log(outgoingChars.slice(-1))

  return (
    <ResultBarContext.Provider value={{ resultBar, setResultBar }}>
      <Flex justify="center" direction="row" wrap="nowrap" align="baseline">
        <Button handleClickChangeWords={handleClickNewChangeWords} />
        <Results
          FalseLengthWords={FalseLengthWords}
          outgoingChars={outgoingChars}
          precentOfTypeKey={precentOfTypeKey}
        />
      </Flex>

      {generateWord !== outgoingChars ? (
        <Flex justify="center" align="center" wrap="wrap">
          <Flex
            justify="center"
            align="baseline"
            wrap="wrap"
            width="50%"
            marginTop="3rem"
            radius="0.8rem"
            shadow="  0 1px 5px 0 rgba(0, 0, 0, 0.486),
            0 1px 13px 0 rgba(0, 0, 0, 0.664)"
          >
            <StyledConsoleText>
              <TypeText color="rgba(109, 109, 109, 0.9)">
                {outgoingChars}
              </TypeText>
              {pushedKey === outgoingChars.slice(-1) ? (
                <TypeText color="#fff" backColor="#09d3ac">
                  {currentChar}
                </TypeText>
              ) : (
                <TypeText color="#fff" backColor="#9c0303">
                  {currentChar}
                </TypeText>
              )}
              <TypeText>{incomingChars}</TypeText>
            </StyledConsoleText>
          </Flex>
        </Flex>
      ) : (
        <Flex direction="column" marginTop="2rem">
          <Title color="white">THE END</Title>
          <ButtonTheEnd
            handleClickReturnWords={handleClickReturnWords}
            handleClickNewChangeWords={() => handleClickNewChangeWords()}
          />
        </Flex>
      )}
    </ResultBarContext.Provider>
  )
}

export default ConsoleText
