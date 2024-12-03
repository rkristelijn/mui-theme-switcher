'use client';

import * as React from 'react';
import { Box, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography, useTheme } from '@mui/material';

function createData(name: string, role: string, book: string) {
  return { name, role, book };
}

const rows = [
  createData('Pug', 'Magician', 'Magician: Apprentice'),
  createData('Tomas', 'Warrior', 'Magician: Apprentice'),
  createData('Arutha', 'Prince', 'Silverthorn'),
  createData('Jimmy the Hand', 'Thief', 'Silverthorn'),
  createData('Macros the Black', 'Sorcerer', 'A Darkness at Sethanon'),
];

export default function DataTable() {
  const theme = useTheme();

  return (
    <Paper elevation={2}>
      <Box sx={{ p: 2 }}>
        <Typography variant="h6" gutterBottom>
          Characters from Feist's Novels
        </Typography>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow sx={{ backgroundColor: theme.palette.primary.main }}>
                <TableCell sx={{ color: theme.palette.primary.contrastText }}>Name</TableCell>
                <TableCell sx={{ color: theme.palette.primary.contrastText }}>Role</TableCell>
                <TableCell sx={{ color: theme.palette.primary.contrastText }}>Book</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow key={row.name}>
                  <TableCell>{row.name}</TableCell>
                  <TableCell>{row.role}</TableCell>
                  <TableCell>{row.book}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Paper>
  );
}
