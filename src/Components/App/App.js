import './App.css';
import Home from '../Home/Home';
import { Routes, Route, useLocation } from 'react-router-dom';
import About from '../About/About';
import ProjectsContainer from '../ProjectsContainer/ProjectsContainer';
import SkillSection from '../SkillSection/SkillSection';
import NavBarMenu from '../Header/NavBarMenu';

function App() {
  const location = useLocation()
  return (
      <div className="App">
        <NavBarMenu />
    <Routes>
        <Route path='/' element={< Home />}/>
        <Route path='/about' element={< About />}/>
        <Route path='/projects' element={ <ProjectsContainer />} />
        <Route path='/skills' element={< SkillSection />}/>
    </Routes>
      </div>
  );
}

export default App;
