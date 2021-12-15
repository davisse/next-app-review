import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import {
  Bar,
  CartesianGrid,
  ComposedChart,
  Legend,
  Line,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';

export default function PlayerStat({ stats, prop, player }) {
  console.log(stats);
  return (
    <ComposedChart
      width={900}
      height={400}
      data={stats}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="date" />
      <YAxis yAxisId="left" />
      <YAxis yAxisId="right" orientation="right" max="40" />
      <Tooltip />
      <Legend />
      <Bar yAxisId="left" dataKey={prop} fill="#8884d8" />
      <Line
        yAxisId="right"
        type="monotone"
        dataKey="minutes"
        stroke="black"
        strokeWidth={2}
      />
    </ComposedChart>
  );
}
