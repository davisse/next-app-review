import React from 'react';
import { Grid } from '@mui/material';
import PropPicker from '../components/PropPicker';
import PlayerStat from '../components/PlayerStat';
import TeamPicker from '../components/TeamPicker';
import PlayerPicker from '../components/PlayerPicker';

export default function PlayerStatComponent({
  team,
  setTeam,
  teams,
  player,
  setPlayer,
  players,
  stats,
  prop,
  props,
  setProp,
  filteredPlayerStats,
}) {
  return (
    <Grid container spacing={4}>
      <Grid item md={1} xs={12}>
        <TeamPicker team={team} setTeam={setTeam} teams={teams} />
      </Grid>
      <Grid item md={2} xs={12}>
        <PlayerPicker
          team={team}
          player={player}
          setPlayer={setPlayer}
          players={players}
        />
      </Grid>
      <Grid item md={1} xs={12}>
        <PropPicker props={props} setProp={setProp} prop={prop} />
      </Grid>

      <Grid container spacing={1}>
        <Grid item md={12} xs={12}>
          {' '}
          <PlayerStat stats={filteredPlayerStats} prop={prop} player={player} />
        </Grid>
      </Grid>
    </Grid>
  );
}
