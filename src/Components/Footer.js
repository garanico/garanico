import React from 'react';
import '../css/App.css'
import DarkModeToggle from './DarkModeToggle';

function Footer({ darkMode, setDarkMode }) {

  return (
    <div id="footer" className="font-lato">
      <div className="footer-text">
        <p>Made with  &#10024; by Grace Aranico</p>
      </div>
      <div className="toggle">
        <DarkModeToggle
         darkMode={darkMode}
         setDarkMode={setDarkMode}/>
      </div>
    </div>
  )
}

export default Footer