import './About.css'
import React from 'react'
import { Button } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import Skills from '../Skills/Skills'
import profile from '../../assets/profile.jpg'

const About = () => {
  return (
    <div className='about-container'>
      <h2 style={{marginBottom: '1rem'}}>About Me</h2>
      <div className='about-section'>
        <div className='about-me'>
          <h3>I'm Lauren, and I'm a front end software developer.</h3>
          <p>Before software development, I was a strength coach. I got my bachelors in exercise science, and trained clients for 7 years and counting. But in January 2022, I was watching the sunrise alone in Costa Rica, and it was a pivotal moment. I knew the next steps for me was either to start moving towards starting my own gym or making a career shift. One of my clients was a career-changer/now-software-developer so I sat him down and here I am. I enrolled in Turing School of Software & Design in the front end program. I have found that software development and personal training have more in common than I expected. Personal training and software development require solving a problem collaboratively, continuous education and growth, and building a product to improve a client's life. When I’m not coding, I’m training clients, snowboarding, enjoying live music, traveling the world, exploring different coffee shops, and seeing friends.</p>
          <h4>Currently learning: MUI, Angular</h4>
        </div>
        <img src={profile} alt='profile picture' className='profile-img'/>
      </div>
    </div>
  )
}

export default About

