import './App.css';
import Home from '../Home/Home';
import { Routes, Route, useLocation } from 'react-router-dom';
import About from '../About/About';
import ProjectsContainer from '../ProjectsContainer/ProjectsContainer';
import Skills from '../Skills/Skills'
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Resume from '../Resume/Resume';

function App() {
  const location = useLocation()
  return (
      <div className="App">
        {location.pathname !== '/' && < Header />}
    <Routes>
        <Route path='/' element={< Home />}/>
        <Route path='/about' element={< About />}/>
        <Route path='/projects' element={ <ProjectsContainer />} />
        <Route path='/skills' element={< Skills />}/>
        <Route path='/resume' element={<Resume />} />
    </Routes>
      <Footer />
      </div>
  );
}

export default App;
