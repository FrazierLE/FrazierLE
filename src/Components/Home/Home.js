import './Home.css'
import React from 'react'
import Button from 'react-bootstrap/Button';
import hireme from '../../assets/hireme.gif'

const Home = () => {
  return (
    <div className='home-container'>
      <img className='gif' src={hireme} alt='hire me gif'/>
      <h2>Bringing design to life, one line of code at a time.</h2>
    </div>
  )
}

export default Home

