import { useState, useEffect} from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import './css/App.css';



//components
import Footer from './Components/Footer';
import Nav from './Components/Nav';
import Homepage from './Components/Homepage';
import About from './Components/About';
import ProjectMain from './Components/Project-Pages/ProjectMain';
import Decidr from './Components/Project-Pages/Decidr';
import HauntedHouse from './Components/Project-Pages/HauntedHouse';
import Magic8Ball from './Components/Project-Pages/Magic8Ball';
import TriviaChill from './Components/Project-Pages/TriviaChill';
import W4B from './Components/Project-Pages/W4B';



function App() {
  const [darkMode, setDarkMode] = useState(false);

  // useEffect (
  //   () => {
  //     let head = document.head;
  //     let link = document.createElement("link");
  //     link.type = "text/css";
  //     link.rel = "stylesheet";
  //     link.href = darkMode ? "./css/darkModeCSS.css" : "./css/lightMode.css";
  //     head.appendChild(link);
  //     return () => {
  //       head.removeChild(link);
  //     }
  //   },[darkMode]
  // )
 
  return (

  <div className={`App ${darkMode ? "dm" : null}`} >
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
            <Route exact path="/projects/decidr" element={<Decidr/>}/>
            <Route exact path="/projects/haunted-house" element={<HauntedHouse />}/>
            <Route exact path="/projects/magic-8ball" element={<Magic8Ball/>}/>
            <Route exact path="/projects/trivia-chill" element={<TriviaChill/>}/>
            <Route exact path="/projects/w4b" element={<W4B/>}/>
            <Route exact path="/projects/decidr" element={<Decidr/>}/>
          </Routes>

        <Footer
          darkMode={darkMode}
          setDarkMode={setDarkMode} 
        />
      </HashRouter>  
    </div>
  );
}

export default App;
