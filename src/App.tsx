import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { CustomForm } from './components/CustomForm'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>

      <CustomForm/>

     </div>
    </>
  )
}

export default App
