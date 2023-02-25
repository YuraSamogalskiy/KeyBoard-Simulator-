import { createContext } from 'react'

const ResultBarContext = createContext({
  resultBar: 0,
  setResultBar: () => {},
})

export default ResultBarContext
