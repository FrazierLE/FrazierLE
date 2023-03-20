import './About.css'
import React from 'react'
import profile from '../../assets/profile.jpg'
import { Card } from 'react-bootstrap'

const About = () => {
  return (
    <div className='about-container'>
      <h2 style={{marginBottom: '1rem'}}>About Me</h2>
      <div className='about-section'>
        <div className='about-me'>
          <Card.Text>
            <h3>Hello there! I'm Lauren, and I'm a front end software developer.</h3>
            <p>Prior to my current career in software development, I worked as a strength coach for seven years, using my bachelor's degree in exercise science to train clients. However, after one morning in January 2022 in Costa Rica, I thought about my two options going forward: either start my own gym or make a career shift. After speaking with one of my clients, who had made the transition from personal training to software development, I decided to enroll in the front-end program at Turing School of Software & Design.</p>
          </Card.Text>
        </div>
        <img src={profile} alt='profile picture' className='profile-img'/>
        <div className='about-me'>
          <Card.Text>
            <p>Interestingly, I've discovered that software development and personal training share more similarities than I expected. Both require collaboration to solve problems, a commitment to continuous education and growth, and the development of products that enhance a client's life. When I'm not coding, I enjoy training clients, snowboarding, attending live music events, traveling the world, exploring new coffee shops, and spending time with friends.</p>     
            <h4>Currently learning: MUI, Angular</h4>
          </Card.Text>
        </div>
      </div>
    </div>
  )
}

export default About

