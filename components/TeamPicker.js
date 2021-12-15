import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function TeamPicker({ team, setTeam, teams }) {
  const handleChange = (event) => {
    setTeam(event.target.value);
  };

  const teamSelectHandler = (e) => {
    console.log(e.target.value);
  };
  return (
    <Box sx={{ width: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Team</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={team}
          label="Team"
          onChange={handleChange}
        >
          {teams.map((team) => (
            <MenuItem className="team" key={team.slug} value={team.slug}>
              {team.slug}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
}
