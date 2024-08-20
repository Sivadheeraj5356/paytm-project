import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { SignUp } from './pages/SignUp'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
   <div>
    <SignUp></SignUp>
   </div>
  )
}

export default App
