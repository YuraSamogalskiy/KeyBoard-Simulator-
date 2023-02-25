import { useEffect, useState } from 'react'

const useKeyPress = (callback) => {
  const [keysPressed, setKeysPressed] = useState(new Set())

  useEffect(() => {
    const downHandler = ({ key, ctrlKey }) => {
      if (ctrlKey && key === 'Enter') {
        setKeysPressed(new Set([...keysPressed, 'Control', 'Enter']))
        callback && callback('Control+Enter')
      }
      if (ctrlKey && key === 'Alt') {
        setKeysPressed(new Set([...keysPressed, 'Control', 'Alt']))
        callback && callback('Control+Alt')
      } else if (!keysPressed.has(key)) {
        setKeysPressed(new Set([...keysPressed, key]))
        callback && callback(key)
      }
    }

    const upHandler = ({ key }) => {
      if (keysPressed.has(key)) {
        keysPressed.delete(key)
        setKeysPressed(new Set([...keysPressed]))
      }
    }

    window.addEventListener('keydown', downHandler)
    window.addEventListener('keyup', upHandler)

    return () => {
      window.removeEventListener('keydown', downHandler)
      window.removeEventListener('keyup', upHandler)
    }
  }, [keysPressed])

  return keysPressed
}
export default useKeyPress
