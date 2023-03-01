import wrns from '../../assets/wrns.png'
import pomodori from '../../assets/pomodori.png'
import trivia from '../../assets/around-the-world.png'
import bookworm from '../../assets/BookWorm.png'
import dailyDose from '../../assets/daily-dose.png'

export const data = [
  {
    id: 1, 
    name: "We're Not Really Strangers",
    image: wrns,
    repo: 'https://github.com/FrazierLE/strangers',
    deployed: 'https://strangers-five.vercel.app/',
    summary: 'We\'re Not Really Strangers is a web application inspired by the card game "We\'re Not Really Strangers". We\'re Not Really Strangers is designed to deepen relational connections by encouraging emotional vulnerability through meaningful conversations.',
    technologies: ['React, Cypress']
  },
  {
    id: 2, 
    name: "BookWorm",
    image: bookworm,
    repo: 'https://github.com/FrazierLE/bookworm-fe',
    deployed: 'https://bookworm-fe.vercel.app/',
    summary: 'Say goodbye to cluttered bookshelves and hello to a new way of reading. Bookworm connects you with a community of book lovers who are eager to share their favorite stories with one another. Simply swap books with members of our community and enjoy new stories for free!',
    technologies: ['GraphQL, TypeScript, Cypress, React, CircleCI']
  },
  {
    id: 3, 
    name: "Around The World",
    image: trivia,
    repo: 'https://github.com/FrazierLE/trivia',
    deployed: 'https://around-the-world-trivia.netlify.app/',
    summary: 'Around the World is a world trivia game application testing the user\'s knowledge of capitals and flags.',
    technologies: ['TypeScript, React, React-Router, GraphQL, Cypress']
  },
  {
    id: 4, 
    name: "Pomodori Putridi",
    image: pomodori,
    repo: 'https://github.com/FrazierLE/pomodori',
    deployed: 'https://pomodori-three.vercel.app/',
    summary: 'Pomodori Putridi is a movie application that simulates to rotten tomatoes and imdb.',
    technologies: ['React, React-Router, Cypress, RESTful API']
  },
  {
    id: 5, 
    name: "We're Not Really Strangers API",
    image: wrns,
    repo: 'https://github.com/FrazierLE/strangers-api',
    deployed: 'https://strangers-api-lhr3.vercel.app/api/v1/strangers/',
    summary: 'API for We\'re Not Really Strangers',
    technologies: ['Express, Node.js']
  },
  {
    id: 6,
    name: 'Daily Dose',
    image: dailyDose,
    repo: 'https://github.com/FrazierLE/materials',
    deployed: 'https://materials-hazel.vercel.app/',
    summary: 'Daily Dose is an application for users to get the New York Times\' top stories.',
    technologies: ['MaterialsUI, React, RESTful API']
  }
]
