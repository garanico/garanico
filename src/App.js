import { useState, useEffect} from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import './css/layout.css';



//components
import Footer from './Components/Footer';
import Nav from './Components/Nav';
import Homepage from './Components/Homepage';
import About from './Components/About';
import ProjectMain from './Components/Project-Pages/ProjectMain';


function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect (
    () => {
      let head = document.head;
      let link = document.createElement("link");
      link.type = "text/css";
      link.rel = "stylesheet";
      link.href = darkMode ? "./css/darkModeCSS.css" : "./css/lightMode.css";
      head.appendChild(link);
      return () => {
        head.removeChild(link);
      }
    },[darkMode]
  )
 
  return (
    <>
       
  <div className="App layout">
      <HashRouter>
        <Nav />
          <Routes>
            <Route exact path="/" element={<Homepage/>}/>
          </Routes>

          <Routes>
            <Route exact path="/about" element={<About />}/>
          </Routes>

          <Routes>
            <Route exact path="/projects" element={<ProjectMain/>}/>
          </Routes>

        <Footer
          darkMode={darkMode}
          setDarkMode={setDarkMode} 
        />
      </HashRouter>  
    </div>
    </>
  );
}

export default App;
