import React, { useState } from 'react';

//css files
import '../css/layout.css';
// import darkModeCSS from '../css/darkMode.css';
// import lightModeCSS from '../css/lightMode.css';
import DarkModeToggle from './DarkModeToggle';

function Footer({ checked }) {

  const [darkMode, setDarkMode] = useState(false);

  return (
    <div id="footer" className="font-lato">
      <div>
        <p>Made with  &#10024; by Grace Aranico</p>
      </div>
      <div className="switch">
        <DarkModeToggle />
      </div>
    </div>
  )
}

export default Footer