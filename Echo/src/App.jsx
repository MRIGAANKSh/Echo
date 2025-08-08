import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import HeroSection from './components/HeroSection'
import MidPart from './components/MidPart'
import WhatWeOffer from './components/MidPart'
import About from './components/MidPart'
import Cursor from './components/Cursor'
import Loader from './components/Loader'

function App() {
  return (
    <>
      <Loader />
      <Cursor />
      <Header />
      <HeroSection />
      <About />
    </>
  )
}

export default App
