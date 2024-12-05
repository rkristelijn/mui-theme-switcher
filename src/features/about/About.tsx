import NextLink from 'next/link';

import { Box, Button, Container, Typography } from '@mui/material';
import { Copyright, ProTip } from './components';

export const About = () => {
  return (
    <Container maxWidth="lg">
      <Box
        sx={{
          my: 4,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Typography variant="h4" component="h1" sx={{ mb: 2 }}>
          Material UI - Next.js example in TypeScript
        </Typography>
        <Box sx={{ maxWidth: 'sm' }}>
          <Button variant="contained" component={NextLink} href="/">
            Go to the dashboard
          </Button>
          <Button variant="text" href="https://github.com/rkristelijn/mui-theme-switcher">
            View the source on GitHub
          </Button>
        </Box>
        <ProTip />
        <Copyright />
      </Box>
    </Container>
  );
};
