import React, { useState } from 'react'
import { Routes, Route } from "react-router-dom"
import './App.css'
import Header from './Header'
import Home from './home/Home'
import Pets from './Pets'

function App() {

  return (
    <div className="page">
    <Header />
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/pets' element={<Pets/>}/>
    </Routes>
    
    
  </div>
  )
}

export default App
