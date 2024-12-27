import React from 'react'
import './nav.css'
import{FaHome} from 'react-icons/fa'
import{CiUser} from 'react-icons/ci'
import{GiSkills} from 'react-icons/gi'
import{ImBooks} from 'react-icons/im'
import{TiContacts} from 'react-icons/ti'
import {useState} from 'react'

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#h')
  return (
    <nav>
      <a href="#h" onClick={() => setActiveNav('#h')} className={activeNav === '#h' ? 'active' : ''}><FaHome/></a>
      <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><CiUser/></a>
      <a href="#expertise" onClick={() => setActiveNav('#expertise')} className={activeNav === '#expertise' ? 'active' : ''}><GiSkills/></a>
      <a href="#projects" onClick={() => setActiveNav('#projects')} className={activeNav === '#projects' ? 'active' : ''}><ImBooks/></a>
      <a href="#contacts" onClick={() => setActiveNav('#contacts')} className={activeNav === '#contacts' ? 'active' : ''}><TiContacts/></a>
   </nav>
  )
}

export default Nav


