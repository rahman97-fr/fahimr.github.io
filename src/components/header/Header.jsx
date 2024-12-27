import React from 'react'
import './header.css'
import Links from './Links'
import Mine from '../../assets/mine.png'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <header>
      <div className='container header_container'>
        <h5>Hello I'm</h5>
        <h1> Fahim Rahman</h1>
        <h5 className= 'text-light'> Fullstack Developer</h5>
        <Links />
        <HeaderSocials/>
        <div className='mine'>
          <img src={Mine} alt="mine"/>
        </div>
        <a href="#contacts" className='scroll_down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header