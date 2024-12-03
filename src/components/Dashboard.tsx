'use client';

import { Box, Button, Typography, Paper } from '@mui/material';
import { LightDarkSwitch } from './LightDarkSwitch';
import Grid from '@mui/material/Grid2'; // MUI 6 grid
import StatsCard from './StatsCard';
import Chart from './Chart';
import DataTable from './DataTable';

export default function Dashboard() {
  return (
    <Box sx={{ flexGrow: 1, p: 4 }}>
      <Grid container spacing={3}>
        <Grid size={12}>
          <Paper sx={{ p: 2 }}>
            <Typography variant="h4" gutterBottom>
              Dashboard
            </Typography>
            <Typography variant="body1" gutterBottom>
              This is a simple dashboard with dummy components to showcase theme-switching capabilities.
            </Typography>
            <Button variant="contained" onClick={() => alert('Button clicked!')}>
              Action Button
            </Button>
            <LightDarkSwitch />
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
    </Box>
  );
}
