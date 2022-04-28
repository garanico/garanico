import { HashRouter, Routes, Route } from 'react-router-dom';

//css files
import './css/layout.css';

//components
import Footer from './Components/Footer';
import Nav from './Components/Nav';
import Homepage from './Components/Homepage';
import About from './Components/About';
import ProjectMain from './Components/Project-Pages/ProjectMain';

function App() {

 
  return (
    <div className="App">
      <HashRouter>
        <Nav />
          <Routes>
            <Route exact path="/" element={<Homepage />} />
          </Routes>

          <Routes>
            <Route exact path="/about" element={<About />} />
          </Routes>

          <Routes>
            <Route exact path="/projects" element={<ProjectMain />} />
          </Routes>

        <Footer />
      </HashRouter>  
    </div>
  );
}

export default App;
