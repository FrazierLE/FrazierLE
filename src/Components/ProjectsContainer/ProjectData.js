import wrns from '../../assets/wrns.png'
import pomodori from '../../assets/pomodori.png'
import trivia from '../../assets/around-the-world.png'
import bookworm from '../../assets/BookWorm.png'
import dailyDose from '../../assets/daily-dose.png'
import taskMaster from '../../assets/task-master.png'
import chatchpt from '../../assets/ChatchPT.png'

export const data = [
  {
    id: 1, 
    name: "BookWorm",
    image: bookworm,
    repo: 'https://github.com/FrazierLE/bookworm-fe',
    inProgress: 'false',
    deployed: 'https://bookworm-fe.vercel.app/',
    summary: 'Say goodbye to cluttered bookshelves and hello to a new way of reading. Bookworm connects you with a community of book lovers who are eager to share their favorite stories with one another. Simply swap books with members of our community and enjoy new stories for free!',
    technologies: ['GraphQL, TypeScript, Cypress, React, CircleCI'],
    accomplishment: 'Effectively and cohesively worked with a frontend and backend team while learning GraphQL.'
  },
  {
    id: 2, 
    name: "Around The World",
    image: trivia,
    repo: 'https://github.com/FrazierLE/trivia',
    inProgress: 'false',
    deployed: 'https://around-the-world-trivia.netlify.app/',
    summary: 'Around the World is a world trivia game application testing the user\'s knowledge of capitals and flags.',
    technologies: ['TypeScript, React, GraphQL, Cypress'],
    accomplishment: 'Self taught TypeScript and utilized GraphQL to build a trivia game.'
  },
  {
    id: 3,
    name: 'Daily Dose',
    image: dailyDose,
    repo: 'https://github.com/FrazierLE/materials',
    inProgress: 'false',
    deployed: 'https://materials-hazel.vercel.app/',
    summary: 'Daily Dose is an application for users to get the New York Times\' top stories.',
    technologies: ['Material UI, React, RESTful API'],
    accomplishment: 'Self-taught Material UI to build a simple news application.'
  },
  {
    id: 4, 
    name: "Pomodori Putridi",
    image: pomodori,
    repo: 'https://github.com/FrazierLE/pomodori',
    inProgress: 'false',
    deployed: 'https://pomodori-three.vercel.app/',
    summary: 'Pomodori Putridi is a movie application that simulates to rotten tomatoes and imdb.',
    technologies: ['React, Cypress, RESTful API'],
    accomplishment: 'Learned the fundamentals of React and Cypress through building this application.'
  },
  {
    id: 5, 
    name: "We're Not Really Strangers",
    image: wrns,
    repo: 'https://github.com/FrazierLE/strangers',
    inProgress: 'false',
    deployed: 'https://strangers-five.vercel.app/',
    summary: 'We\'re Not Really Strangers is a web application inspired by the card game "We\'re Not Really Strangers". We\'re Not Really Strangers is designed to deepen relational connections by encouraging emotional vulnerability through meaningful conversations.',
    technologies: ['React, Cypress'],
    accomplishment: 'Successfully created an application to create a small bridge between human interaction and technology.'
  },
  {
    id: 6, 
    name: "We're Not Really Strangers API",
    image: wrns,
    repo: 'https://github.com/FrazierLE/strangers-api',
    deployed: 'https://strangers-api-lhr3.vercel.app/api/v1/strangers/',
    inProgress: 'false',
    summary: 'API for We\'re Not Really Strangers',
    technologies: ['Express, Node.js'], 
    accomplishment: 'Successfully built an express server with Node.js and Express.'
  }, 
  {
    id: 7,
    name: 'Task Master',
    image: taskMaster,
    repo: 'https://github.com/FrazierLE/taskmaster-fe',
    inProgress: 'true',
    deployed: '',
    summary: 'Task Master is a web application designed for recent software engineer bootcamp grads to stay on track for interview prep.',
    technologies: ['TypeScript, React, Material UI, GraphQL, GoogleOAuth, Jest'],
    accomplishment: 'Self taught how to utilize google oauth for login purposes.'
  },
  {
    id: 8,
    name: 'Cami Hatch Physical Therapy',
    image: chatchpt,
    repo: '',
    inProgress: 'false',
    deployed: 'https://www.chatchpt.com/',
    summary: 'Cami Hatch is a physical therapist in Denver who needed a website for her new practice.',
    technologies: ['React, Tailwind CSS'],
    accomplishment: 'Self taught Tailwind CSS for a freelance project. The Website is live!'
  }
]
