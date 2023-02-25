import './App.css'
import styled from 'styled-components'
import Title from './components/Title'
import Flex from './components/Flex'
import ConsoleText from './components/ConsoleText'
import Button from './UI/Button'
import Footer from './components/Footer'

const AppWrapper = styled.div`
  width: 100%;
`

function App() {
  return (
    <AppWrapper className="App">
      <Flex justify="center">
        <Title
          fontWeight="700"
          size="1.7rem"
          color="#334358"
          backColor="#9e9797b0"
          padding="1.6rem"
          shadow=" 0 1px 5px 0 rgba(2, 2, 0, 0.486),
    0 1px 13px 0 rgba(0, 0, 0, 0.664)"
        >
          KeyBoard training
        </Title>
      </Flex>
      <Flex marginTop="2rem" justify="center" width="100">
        <ConsoleText />
      </Flex>
      <Footer />
    </AppWrapper>
  )
}

export default App
