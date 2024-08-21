import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { SignUp } from './pages/SignUp'
import { SignIn } from './pages/SignIn'
import './App.css'
import { BrowserRouter, Router , Routes, Route } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
   <div>
    <BrowserRouter>
    {/* <SignUp></SignUp> */}
    <Routes>
      <Route path='/signIn' element={<SignIn></SignIn>}></Route>
      <Route path='/signUp' element={<SignUp></SignUp>}></Route>
      <Route></Route>
      <Route></Route>
    </Routes>
    </BrowserRouter>
   </div>
  )
}

export default App
