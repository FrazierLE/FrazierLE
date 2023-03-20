import './ProjectsContainer.css'
import React from 'react'
import { NavLink } from 'react-router-dom'
import { data } from './ProjectData.js'
import ModalCard from '../Modal/ModalCard'

const ProjectsContainer = () => {
  const modalData = data.map(project => {
    return (
    <ModalCard 
      key={project.id}
      id={project.id}
      name={project.name}
      image={project.image}
      repo={project.repo}
      inProgress={project.inProgress}
      deployed={project.deployed}
      summary={project.summary}
      technologies={project.technologies}
      accomplishment={project.accomplishment}
    />
    )
  })

  return (
    <div className='projects-container'>
      <h2>Peruse the Projects.</h2>
      <div className='project-cards'>
        {modalData}
      </div>
    </div>
  )
}

export default ProjectsContainer