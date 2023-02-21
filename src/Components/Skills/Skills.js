import React from 'react'
import './Skills.css'
import { Card } from 'react-bootstrap'

const Skills = () => {
  return (
    <div className='skills-container'>
      <Card className='development skills'>
        <Card.Header className='title-header'>Development</Card.Header>
        <div className='flex'>
          <img className='project-img' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain-wordmark.svg" alt='graphql icon' title='GraphQL'/>
          <img className='project-img' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt='javascript logo'title='JavaScript'/> 
          <img className='project-img' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" alt='typescript logo' title='TypeScript'/>
          <img className='project-img' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg" alt='react logo' title='React'/>
          <img className='project-img' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/webpack/webpack-original-wordmark.svg" alt='webpack logo' title='Webpack'/>
          <img className='project-img' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original-wordmark.svg" alt='express logo' title='Express'/> 
          <img className='project-img' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg" alt='redux logo' title='Redux'/>
        </div>
        {/* <h3>Not shown -- Apollo Client, REST API</h3> */}
      </Card>

      <Card className='workflow skills'>
        <Card.Header className='title-header'>Workflow</Card.Header>
        <div className='flex'>
          <img className='project-img' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original-wordmark.svg" alt='github logo' title='Github'/>
          <img className='project-img' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original-wordmark.svg" alt='git logo' title='Git'/> 
          <img className='project-img' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg" alt='npm logo' title='npm'/>
        </div>
        {/* <h3>Not shown -- Github projects, TDD, Agile, Miro, Netlify, Vercel</h3> */}
      </Card>

      <Card className='testing skills'>
        <Card.Header className='title-header'>Testing</Card.Header>
        <div className='flex'>
          <img className='project-img' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mocha/mocha-plain.svg" alt='mocha logo' title='Mocha'/>
          <img className='project-img' src='https://raw.githubusercontent.com/cypress-io/cypress/develop/assets/cypress-logo-light.png' alt='cypress logo' title='Cypress'/>
        </div>
        {/* <h3>Not shown -- Cypress</h3> */}
      </Card>
      
      {/* <div className='accessibility skill'>
        <h2>Accessibility</h2>
        <h3>Not shown -- Lighthouse, WAVE, ColorBlindness Extension</h3>
      </div> */}
      
      <Card className='web-design skills'>
        <Card.Header className='title-header' >Web Design</Card.Header>
        <div className='flex'>
          <img className='project-img' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original-wordmark.svg" alt='bootstrap logo' title='BootStrap'/>
          <img className='project-img' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original-wordmark.svg" alt='css logo' title='CSS3'/>
          <img className='project-img' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original-wordmark.svg" alt='html logo' title='HTML5'/>   
          <img className='project-img' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/trello/trello-plain.svg" alt='trello logo' title='Trello'/>
          <img className='project-img' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" alt='figma logo' title='Figma'/> 
        </div>
          {/* <h3>Not shown -- Responsive Design</h3> */}
      </Card>    
    </div>
  )
}

export default Skills