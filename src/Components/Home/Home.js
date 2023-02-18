import './Home.css'
import React from 'react'
import Button from 'react-bootstrap/Button';
import { NavLink } from 'react-router-dom';

const Home = () => {
  const handleClick = () => {
    console.log('clicked!')
  }

  return (
    <div className='home-container'>
      <h1>Welcome</h1>
      <NavLink to='/about'>
        <Button variant="outline-info" onClick={handleClick}>Explore Site</Button>
      </NavLink>
    </div>
  )
}

export default Home