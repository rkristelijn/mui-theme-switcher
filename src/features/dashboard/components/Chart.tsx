'use client';

import * as React from 'react';
import { Box, Paper, Typography, useTheme } from '@mui/material';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

// Sample Bitcoin data (replace with real data if available)
const data = [
  { date: '2022-01-01', price: 47000 },
  { date: '2022-02-01', price: 42000 },
  { date: '2022-03-01', price: 45000 },
  { date: '2022-04-01', price: 48000 },
  { date: '2022-05-01', price: 30000 },
  { date: '2022-06-01', price: 20000 },
  { date: '2022-07-01', price: 22000 },
  { date: '2022-08-01', price: 24000 },
  { date: '2022-09-01', price: 19000 },
  { date: '2022-10-01', price: 21000 },
  { date: '2022-11-01', price: 17000 },
  { date: '2022-12-01', price: 16000 },
  { date: '2023-01-01', price: 18000 },
];

export const Chart = () => {
  const theme = useTheme();

  return (
    <Paper elevation={2}>
      <Box sx={{ p: 2 }}>
        <Typography variant="h6" gutterBottom>
          Bitcoin Price Over the Last Year
        </Typography>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="price" stroke={theme.palette.primary.main} />
          </LineChart>
        </ResponsiveContainer>
      </Box>
    </Paper>
  );
};
