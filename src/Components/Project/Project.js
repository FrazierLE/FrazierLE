import React from 'react'
import { Card, Button } from 'react-bootstrap'

const Project = ({ id, name, image, repo, deployed, summary, technologies }) => {
 return(
  <Card className='card' style={{width: '20rem', margin: '3rem'}}>
    <Card.Header className="card-img-top">
      <img src={image}/>
    </Card.Header>
    <Card.Title className="card-title">
      <h2>{name}</h2>
    </Card.Title>
    <Card.Body className="card-body">
      <p className="card-text">{summary}</p>
    </Card.Body>
    <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center'}}>
      <Button style={{height: '2rem', width: 'max-content'}}>Repo</Button>
      <Button style={{height: '2rem', width: 'max-content'}}>Deployed</Button>
    </div>
  </Card>
 )
}

export default Project