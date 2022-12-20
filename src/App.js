import './App.css';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Home from './pages/Home';
import Projects from './pages/Projects';
import Experience from './pages/Experience';
import Navbar from './comps/Navbar';
import Footer from './comps/Footer';
import ProjectDisplay from './pages/ProjectDisplay';
function App() {
  return (
    <div className="App">
 <Router>
  <Navbar/>
  <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/projects' element={<Projects/>}/>
    <Route path='/projects/:id' element={<ProjectDisplay/>}/>
    <Route path='/experience' element={<Experience/>}/>
  </Routes>
 </Router>
 <Footer/>
    </div>
  );
}

export default App;
