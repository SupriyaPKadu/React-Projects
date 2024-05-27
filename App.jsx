import { useState } from 'react'
import Error_API from './components/Error_API'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Error_API/>
    </>
  )
}

export default App
