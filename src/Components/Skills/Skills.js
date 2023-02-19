import React from 'react'
import './Skills.css'
import { Card } from 'react-bootstrap'

const Skills = () => {
  return (
    <div className='skills-container'>
      <Card className='development skills'>
        <Card.Header style={{borderRadius: '1rem'}}>Development</Card.Header>
        <div className='flex'>
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain-wordmark.svg" alt='graphql icon'/>
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt='javascript logo'/> 
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" alt='typescript logo'/>
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg" alt='react logo'/>
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/webpack/webpack-original-wordmark.svg" alt='webpack logo'/>
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original-wordmark.svg" alt='express logo'/> 
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg" alt='redux logo'/>
        </div>
        {/* <h3>Not shown -- Apollo Client, REST API</h3> */}
      </Card>

      <Card className='workflow skills'>
        <Card.Header style={{borderRadius: '1rem'}}>Workflow</Card.Header>
        <div className='flex'>
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original-wordmark.svg" alt='github logo'/>
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original-wordmark.svg" alt='git logo'/> 
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg" alt='npm logo'/>
        </div>
        {/* <h3>Not shown -- Github projects, TDD, Agile, Miro, Netlify, Vercel</h3> */}
      </Card>

      <Card className='testing skills'>
        <Card.Header style={{borderRadius: '1rem'}}>Testing</Card.Header>
        <div className='flex'>
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mocha/mocha-plain.svg" alt='mocha logo'/>
        </div>
        {/* <h3>Not shown -- Cypress</h3> */}
      </Card>
      
      {/* <div className='accessibility skill'>
        <h2>Accessibility</h2>
        <h3>Not shown -- Lighthouse, WAVE, ColorBlindness Extension</h3>
      </div> */}
      
      <Card className='web-design skills'>
        <Card.Header style={{borderRadius: '1rem'}}>Web Design</Card.Header>
        <div className='flex'>
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original-wordmark.svg" alt='bootstrap logo'/>
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original-wordmark.svg" alt='css logo'/>
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original-wordmark.svg" alt='html logo'/>   
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/trello/trello-plain.svg" alt='trello logo'/>
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" alt='figma logo'/> 
        </div>
          {/* <h3>Not shown -- Responsive Design</h3> */}
      </Card>    
    </div>
  )
}

export default Skills