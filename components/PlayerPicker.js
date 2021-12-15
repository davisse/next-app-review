import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function PlayerPick({ team, setPlayer, player, players }) {
  const filteredPlayers = players.filter(function (player) {
    return player.teamslug == team;
  });
  const handleChange = (event) => {
    setPlayer(event.target.value);
  };

  const playerSelectHandler = (e) => {
    console.log(e.target.value);
  };
  return (
    <Box sx={{ width: 300 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Player</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={player}
          label="Player"
          onChange={handleChange}
        >
          {filteredPlayers.map((player) => (
            <MenuItem className="player" key={player._id} value={player.name}>
              {player.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
}
