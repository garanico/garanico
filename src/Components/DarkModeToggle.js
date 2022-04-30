import React, { useState } from 'react';
import Switch from '@mui/material/Switch';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
// import darkModeCSS from '../css/darkModeCSS.css';
// import lightModeCSS from '../css/lightModeCSS.css';


function DarkModeToggle({ darkMode, changeDarkMode }) {

      return(
        <FormGroup>
        <FormControlLabel 
          control={<Switch
            checked={darkMode}  
            onChange={changeDarkMode}
            inputProps={{ 'aria-label': 'controlled' }}
          />}
          labelPlacement="start"
          label="Enable Dark Mode" 
       />
      </FormGroup>
      )
}

export default DarkModeToggle