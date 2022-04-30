import { useState, createContext } from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';

//css files
import layout from './css/layout.css';
import lightModeCSS from './css/lightMode.css';
import darkModeCSS from './css/darkMode.css';

//components
import Footer from './Components/Footer';
import Nav from './Components/Nav';
import Homepage from './Components/Homepage';
import About from './Components/About';
import ProjectMain from './Components/Project-Pages/ProjectMain';

const ThemeContext = createContext(null);

function App() {
  const [darkMode, setDarkMode] = useState(false);

    const darkTheme = (event) => {
        setDarkMode(event.target.checked);
    }
    console.log('toggle', darkTheme);

    const isDarkMode = () => darkTheme === true ? {darkModeCSS} : {lightModeCSS}
    

 
  return (
    <ThemeContext.Provider value={isDarkMode}>
  <div className="App" style={[{layout}, {isDarkMode}]}>
      <HashRouter>
        <Nav />
          <Routes>
            <Route exact path="/" element={
              <Homepage
              checked={darkMode}
              darkTheme={darkTheme}
             />
             }/>
          </Routes>

          <Routes>
            <Route exact path="/about" element={
              <About 
                darkTheme={darkTheme}
                checked={darkMode}
              />
            }/>
          </Routes>

          <Routes>
            <Route exact path="/projects" element={
            <ProjectMain
              darkTheme={darkTheme}
              checked={darkMode}
            />
            }/>
          </Routes>

        <Footer />
      </HashRouter>  
    </div>
    </ThemeContext.Provider>
  );
}

export default App;
