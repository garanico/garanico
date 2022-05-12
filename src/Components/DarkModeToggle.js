import React from 'react';
import '../css/App.css'




function DarkModeToggle({darkMode,setDarkMode }) {


      return(
        <>
          <p>Enable Dark Mode</p>
          <label className="switch">
            <input type="checkbox" onClick={() => setDarkMode(!darkMode)}/>
            <span className="slider round"></span>
          </label>
        </>
      )
}

export default DarkModeToggle