import './ProjectsContainer.css'
import React from 'react'
import { NavLink } from 'react-router-dom'
import Project from '../Project/Project'
import { data } from './ProjectData.js'


const ProjectsContainer = () => {
  const projectData = data.map(project => {
    return (
    <Project 
      key={project.id}
      id={project.id}
      name={project.name}
      image={project.image}
      repo={project.repo}
      deployed={project.deployed}
      summary={project.summary}
      technologies={project.technologies}
    />
    )
  })
  return (
    <div className='projects-container'>
      <h2>Puruse the projects.</h2>
      <div className='project-cards'>
        {projectData}
      </div>
    </div>
  )
}

export default ProjectsContainer