import React, {useState} from 'react';
import Switch from '@mui/material/Switch';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';



function DarkModeToggle({ darkMode, setDarkMode }) {
  const [checked, setChecked] = useState(false);

  const handleChange = (event) => {
    setChecked(event.target.checked);
    setDarkMode(event.target.checked);
  };

      return(
        <FormGroup>
        <FormControlLabel 
          control={<Switch
            checked={checked}  
            onChange={handleChange}
            inputProps={{ 'aria-label': 'controlled' }}
          />}
          labelPlacement="start"
          label="Enable Dark Mode" 
       />
      </FormGroup>
      )
}

export default DarkModeToggle