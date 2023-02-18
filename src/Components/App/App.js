import './App.css';
import Home from '../Home/Home';
import { Routes, Route } from 'react-router-dom';
import About from '../About/About';
import ProjectsContainer from '../ProjectsContainer/ProjectsContainer';
import Skills from '../Skills/Skills'
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

function App() {
  return (
      <div className="App">
        < Header />
    <Routes>
        <Route path='/' element={< Home />}/>
        <Route path='/about' element={< About />}/>
        <Route path='/projects' element={ <ProjectsContainer />} />
        <Route path='/skills' element={< Skills />}/>
    </Routes>
      <Footer />
      </div>
  );
}

export default App;
