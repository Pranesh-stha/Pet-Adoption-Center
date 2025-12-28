import React, { useState } from 'react'
import Hero from './Hero'
import Homefilter from './Homefilter'
import Homecard from './Homecard'
import About from './About'
import Bottombar from './Bottombar'
import Footer from './Footer'
import Logincard from '../Logincard'

function Home({setLoginFalse, showLogin}){

  return (
    
    

    <main>

      <Hero />

      <Homefilter />

      <Homecard />
      <About />
      <Bottombar />
      {showLogin? <Logincard setLoginFalse={setLoginFalse}/>:null}
    </main>

    
    
    
  
  )
}

export default Home