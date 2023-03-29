import './About.css'
import React from 'react'
import profile from '../../assets/profile.jpg'
import { Card } from 'react-bootstrap'

const About = () => {
  return (
    <div className='about-container'>
      <h2 style={{marginBottom: '1rem'}}>About Me</h2>
      <div className='about-section'>
        <img src={profile} alt='profile picture' className='profile-img'/>
        <h3>Hello there! I'm Lauren, and I'm a front end software developer.</h3>
        <h4>Currently learning: Jest, Angular</h4>
        <div className='about-me'>
          <p>As a third culture kid, I've had the privilege of living in different parts of the world, soaking in diverse cultures, and gaining a unique perspective on life. Fuelled by my passion for fitness, I started my career as a personal trainer, helping individuals achieve their fitness goals and lead a healthy lifestyle. However, my curiosity for technology and web development grew stronger over time, leading me to transition into front-end software development.  As an extrovert, I thoroughly enjoy socializing and meeting new people. You can often find me striking up conversations and making new friends wherever I go. When I'm not working on my latest coding project, I love staying active by snowboarding, traveling, trying new activities, or hitting the gym.  Overall, my diverse background, combined with my love for fitness and technology, has shaped me into the person I am today – a driven, outgoing, and active individual with a zest for life.</p>
        </div>
      </div>
    </div>
  )
}

export default About

