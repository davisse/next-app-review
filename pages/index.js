import Head from 'next/head';

import clientPromise from '../lib/mongodb';
import { useState } from 'react';
import { Grid } from '@mui/material';

import PlayerStatComponent from '../components/PlayerStatComponent';

export default function Home({ isConnected, teams, players, playerStats }) {
  const [team, setTeam] = useState('bucks');
  const [prop, setProp] = useState('');
  const [player, setPlayer] = useState('Giannis Antetokounmpo');

  //set de variables et filtres
  const props = Object.keys(playerStats[0]);
  const filteredPlayerStats = playerStats.filter(function (stat) {
    return stat.name == player;
  });
  //Handlers

  return (
    <div className="container">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <PlayerStatComponent
          team={team}
          setTeam={setTeam}
          teams={teams}
          player={player}
          setPlayer={setPlayer}
          players={players}
          stats={filteredPlayerStats}
          prop={prop}
          props={props}
          setProp={setProp}
          filteredPlayerStats={filteredPlayerStats}
        />
      </main>
    </div>
  );
}

export async function getServerSideProps(context) {
  try {
    // client.db() will be the default database passed in the MONGODB_URI
    // You can change the database by calling the client.db() function and specifying a database like:
    // const db = client.db("myDatabase");
    // Then you can execute queries against your database like so:
    // db.find({}) or any of the MongoDB Node Driver commands

    const client = await clientPromise;
    const db = client.db('next-pokearea');

    const teams = await db
      .collection('teams')
      .find({})
      .sort({ slug: 1 })
      .limit(30)
      .toArray();
    const players = await db
      .collection('players')
      .find({})
      .sort({ name: 1 })
      .toArray();
    const playerStats = await db
      .collection('playerStats')
      .find({})
      .sort({})
      .toArray();

    return {
      props: {
        isConnected: true,
        teams: JSON.parse(JSON.stringify(teams)),
        players: JSON.parse(JSON.stringify(players)),
        playerStats: JSON.parse(JSON.stringify(playerStats)),
      },
    };
  } catch (e) {
    console.error(e);
    return {
      props: { isConnected: false },
    };
  }
}
