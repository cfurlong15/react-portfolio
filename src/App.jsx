import React from 'react'
import { useState } from 'react'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'
import './App.css'

function App() {
  

  return (
    <>
      <div className='App'>
        <Header />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/about' element={<About />} />
        </Routes>
        <Footer />
      </div>
    </>
  )
}

export default App
