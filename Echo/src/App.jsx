import { useState } from 'react'

import './App.css'
import Header from './components/Header'
import HeroSection from './components/HeroSection'
import MidPart from './components/MidPart'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <HeroSection/>
      <MidPart/>
    </>
  )
}

export default App
