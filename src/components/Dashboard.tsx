'use client';

import { Box, Button, MenuItem, Select, Typography } from '@mui/material';
import { LightDarkSwitch } from './LightDarkSwitch';

export default function Dashboard() {
  return (
    <Box sx={{ p: 4 }}>
      <Typography variant="h1" gutterBottom>
        Dashboard
      </Typography>
      <Typography variant="body1" gutterBottom>
        This is a simple dashboard with theme-switching capabilities.
      </Typography>

      <Button variant="contained" onClick={() => alert('Button clicked!')}>
        Action Button
      </Button>
      <Typography variant="body1" gutterBottom>
        Mind, when running on stackblitz, you need to refresh after switching
      </Typography>
      <LightDarkSwitch />
    </Box>
  );
}
