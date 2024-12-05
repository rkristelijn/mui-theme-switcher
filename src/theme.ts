'use client';
import { createTheme } from '@mui/material/styles';
import { Roboto } from 'next/font/google';

const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
});

const transitionTime = 2;

const theme = createTheme({
  cssVariables: {
    colorSchemeSelector: 'class',
    disableCssColorScheme: true,
  },
  colorSchemes: {
    /** you just need dark and light set to true */
    dark: true,
    light: true,
    /** or use the custom colors like below*/
    // dark: {
    //   palette: {
    //     mode: 'dark',
    //     background: {
    //       default: '#121212',
    //       paper: '#1d1d1d',
    //     },
    //     primary: {
    //       main: '#bb86fc',
    //     },
    //     secondary: {
    //       main: '#03dac6',
    //     },
    //     error: {
    //       main: '#cf6679',
    //     },
    //   },
    // },
    // light: {
    //   palette: {
    //     mode: 'light',
    //     background: {
    //       default: '#f5f5f5',
    //       paper: '#fff',
    //     },
    //     primary: {
    //       main: '#6200ee',
    //     },
    //     secondary: {
    //       main: '#03dac6',
    //     },
    //     error: {
    //       main: '#b00020',
    //     },
    //   },
    // },
  },
  typography: {
    fontFamily: roboto.style.fontFamily,
  },
  components: {
    MuiPaper: {
      styleOverrides: {
        root: {
          transition: `background-color ${transitionTime}s, color ${transitionTime}s`,
        },
      },
    },
    MuiAlert: {
      styleOverrides: {
        root: ({ theme }) => ({
          backgroundColor: theme.palette.background.default,
          transition: `background-color ${transitionTime}s, color ${transitionTime}s`,
        }),
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          transition: `background-color ${transitionTime}s, color ${transitionTime}s`,
        },
      },
    },
  },
});

export default theme;
