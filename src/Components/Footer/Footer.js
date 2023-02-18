import React from 'react'
import { NavLink } from 'react-router-dom'
import './Footer.css'
import Resume from '../Resume/Resume'

const Footer = () => {
  return (
    <footer className='footer'>
      {/* Email, Resume */}
      <NavLink to='https://www.linkedin.com/in/lauren-frazier-745053188/'>
        <img className='img-footer' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg" />
      </NavLink>
      <NavLink to='https://github.com/FrazierLE?tab=repositories'>
        <img className='img-footer' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original-wordmark.svg" alt='github logo'/>
      </NavLink>
      <NavLink to='/resume'>
        <img src='https://png.pngtree.com/png-vector/20190411/ourlarge/pngtree-vector-resume-icon-png-image_927259.jpg'/>
      </NavLink>
    </footer>
  )
}

export default Footer