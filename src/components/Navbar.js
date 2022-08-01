import React from 'react'
import logo from './logo.png'

const Navbar = () => {
  return (
    <nav>
    <img src={logo} alt="logo_picture" className='logo_picture'/>
    <h2 className='header-title'>Meme Generator</h2>
    <p className='paragraph'>React Course Project 3</p>
    </nav>
  )
}

export default Navbar