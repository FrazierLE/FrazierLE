import React from 'react'
import { Button } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import './Header.css'

const Header = () => {
  return (
    <nav className='nav-btn'>
      <NavLink to='/projects'>
        <Button className='btn'>Projects</Button>
      </NavLink>
      <NavLink to='/about'>
        <Button className='btn'>About</Button>
      </NavLink>
      <NavLink to='/skills'>
        <Button className='btn'>Skills</Button>
      </NavLink>
    </nav>
  )
}

export default Header