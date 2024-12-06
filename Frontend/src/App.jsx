import { useState, useEffect } from 'react'
import { Home, About, Feature, Login, Signup } from './Pages'
import { Navbar } from './Components/index'
import { Outlet } from 'react-router-dom'
import './App.css'

function App() {

  return (
    
      <div className='h-full bg-custom-radial' >

        <div className='relative z-20'>
          <Navbar />
        </div>
        <div className='w-full h-full text-white relative z-20 flex items-center justify-center'>
          <Outlet />
        </div>
      </div>
     
    
  )
}

export default App
