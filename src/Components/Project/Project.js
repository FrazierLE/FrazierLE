import React from 'react'
import { Card, Button } from 'react-bootstrap'
import './Project.css'
import { NavLink } from 'react-router-dom'

const Project = ({ id, name, image, repo, deployed, summary, technologies }) => {
 return(
  <Card className='card' style={{width: '20rem', margin: '3rem'}}>
    <Card.Img className="card-img-top img-card" src={image}></Card.Img>
    <Card.Title className="card-title">
      <h2>{name}</h2>
    </Card.Title>
    <Card.Body className="card-body">
      <p className="card-text">{summary}</p>
    </Card.Body>
    <div className='project-btn'>
      <NavLink to={repo}>
        <Button style={{height: '2rem', width: 'max-content'}}>Repo</Button>
      </NavLink>
      <NavLink to={deployed}>
        <Button style={{height: '2rem', width: 'max-content'}}>Deployed</Button>
      </NavLink>
    </div>
  </Card>
 )
}

export default Project