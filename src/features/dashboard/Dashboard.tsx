'use client';

import { Box, Button, Typography, Paper, Link, Alert } from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';
import { LightDarkSwitch } from '@/components/LightDarkSwitch';
import Grid from '@mui/material/Grid2'; // MUI 6 grid
import { Chart, DataTable, StatsCard } from './components';
import { useState } from 'react';

export const Dashboard = () => {
  const [showAlert, setShowAlert] = useState(false);

  const handleButtonClick = () => {
    setShowAlert((prev) => !prev);
  };

  return (
    <Grid container spacing={3}>
      <Grid size={12}>
        <Paper sx={{ p: 2 }}>
          <Box display="flex" justifyContent="space-between" alignItems="center">
            <Typography variant="h4" gutterBottom>
              Dashboard
            </Typography>
            <Box display="flex" alignItems="center">
              <Link href="/about" sx={{ mr: 2 }}>
                About
              </Link>
              <LightDarkSwitch />
            </Box>
          </Box>
          <Typography variant="body1" gutterBottom>
            This is a simple dashboard with dummy components to showcase theme-switching capabilities.
          </Typography>
          <Button variant="contained" onClick={handleButtonClick}>
            Toggle Alert
          </Button>
          {showAlert && (
            <Alert icon={<CheckIcon fontSize="inherit" />} severity="success" sx={{ mt: 2 }}>
              Here is a gentle confirmation that your action was successful.
            </Alert>
          )}
        </Paper>
      </Grid>
      <Grid size={{ xs: 12, md: 6 }}>
        <StatsCard title="Total Sales" value="$12,345" />
      </Grid>
      <Grid size={{ xs: 12, md: 6 }}>
        <StatsCard title="New Users" value="1,234" />
      </Grid>
      <Grid size={{ xs: 12, md: 6 }}>
        <Paper sx={{ p: 2 }}>
          <Typography variant="h6" gutterBottom>
            Sales Chart
          </Typography>
          <Chart />
        </Paper>
      </Grid>
      <Grid size={{ xs: 12, md: 6 }}>
        <Paper sx={{ p: 2 }}>
          <Typography variant="h6" gutterBottom>
            User Data
          </Typography>
          <DataTable />
        </Paper>
      </Grid>
    </Grid>
  );
};
