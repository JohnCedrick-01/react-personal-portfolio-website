import React from 'react'
import './nav.css'
import {AiOutlineHome} from 'react-icons/ai'
import {FiUser} from 'react-icons/fi'
import {BiBookHeart} from 'react-icons/bi'
import {RiServiceLine} from 'react-icons/ri'
import {BiMessageDots} from 'react-icons/bi'
import {VscFileSubmodule} from 'react-icons/vsc'

import {useState} from 'react'


const Nav =() => {
  const [activeNav, setActiveNav] = useState('#')
  return (
    <nav>
      <a href="#" onClick={() => setActiveNav('#')}  className={activeNav === '#' ? 'active' : ''}><AiOutlineHome /></a>
      <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><FiUser /></a>
      <a href="#experience" onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}><BiBookHeart /></a>
      <a href="#services" onClick={() => setActiveNav('#services')} className={activeNav === '#services' ? 'active' : ''}><RiServiceLine /></a>
      <a href="#portfolio" onClick={() => setActiveNav('#portfolio')} className={activeNav === '#portfolio' ? 'active' : ''}><VscFileSubmodule /></a>
      <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><BiMessageDots /></a>
    </nav>
  )
}

export default Nav