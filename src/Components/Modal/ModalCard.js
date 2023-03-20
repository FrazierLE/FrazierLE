import 'bootstrap/dist/css/bootstrap.min.css';
import { Modal, Button, Card } from "react-bootstrap";
import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
import './Project.css'
import CardHeader from 'react-bootstrap/esm/CardHeader';

const ModalCard = ({ id, name, image, repo, inProgress, deployed, summary, technologies, accomplishment }) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return(<div>
    <Card>
      <img src={image} style={{width: 'max-content', height: '20vh'}}/>
      {inProgress === 'true' && <Card.Text>Still a Work In Progress</Card.Text>}
      <Card.Text style={{fontSize: '1.25rem'}}>{name}</Card.Text>
      <Button variant="primary" onClick={handleShow}>See Project Details</Button>
    </Card>

<Modal show={show} onHide={handleClose} >
  <img src={image} height='300vh' width='max-content'/>
  <Modal.Header closeButton>
    <Modal.Title>{name}</Modal.Title>
  </Modal.Header>
  <Modal.Body>
    {inProgress === 'true' && <p style={{color: 'blue'}}>Current project</p>}
    <p>{summary}</p>
    Technologies: 
        {technologies.map(item => {
          return( <li className='list'>{item}</li>)
        })}
    <br/>
    <p>Accomplishment: {accomplishment}</p>
  </Modal.Body>
  <Modal.Footer>
    <NavLink to={repo} target='_blank'>
      <Button style={{height: '2rem', width: 'max-content'}} variant='success'>Repo</Button>
    </NavLink>
    <NavLink to={deployed} target='_blank'>
      <Button style={{height: '2rem', width: 'max-content'}} variant='success'>Deployed</Button>
    </NavLink>
  </Modal.Footer>
</Modal>
  </div>
  )
}

export default ModalCard