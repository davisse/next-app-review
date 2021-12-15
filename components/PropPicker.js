import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function PropPicker({ props, setProp, prop }) {
  const handleChange = (event) => {
    setProp(event.target.value);
  };

  const teamSelectHandler = (e) => {
    console.log(e.target.value);
  };
  return (
    <Box sx={{ width: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Prop</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={prop}
          label="Prop"
          onChange={handleChange}
        >
          {props.map((prop) => (
            <MenuItem className="prop" key={prop} value={prop}>
              {prop}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
}
