import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Principal from './principal/principal.jsx'
import Contacto from './contacto/contacto'
import Navbar from './navbar/navbar'


function App() {


  return (
    <div className="app">
      <Navbar></Navbar>
      <Principal></Principal>

    </div>
  )
}

export default App
