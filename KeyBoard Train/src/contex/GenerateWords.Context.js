import { createContext } from 'react'
import generateWords from '../utils/genereateWords'

const GenerateWordsContext = createContext({
  generateWord: generateWords(10).toLowerCase(),
  SetGenerateWord: () => {},
})

export default GenerateWordsContext
