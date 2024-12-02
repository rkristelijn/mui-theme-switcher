'use client';

import React, { useEffect, useState } from 'react';
import { ThemeProvider as MUIThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

const lightTheme = createTheme({
  palette: {
    mode: 'light',
    background: {
      default: '#ffffff',
      paper: '#f5f5f5',
    },
    text: {
      primary: '#000000',
    },
  },
});

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    background: {
      default: '#121212',
      paper: '#1d1d1d',
    },
    text: {
      primary: '#ffffff',
    },
  },
});

export default function CustomThemeProvider({ children }: Readonly<{ children: React.ReactNode }>) {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const storedTheme = document.cookie
      .split('; ')
      .find((row) => row.startsWith('theme='))
      ?.split('=')[1];
    console.log('ThemeProvider.tsx storedTheme (from cookie):', storedTheme);
    setTheme(storedTheme === 'dark' ? 'dark' : 'light');
    setMounted(true);
  }, []);

  if (!mounted) {
    return null; // Prevents mismatched class names during hydration
  }

  const appliedTheme = theme === 'dark' ? darkTheme : lightTheme;
  console.log('ThemeProvider.tsx applying theme:', appliedTheme.palette.mode);

  return (
    <MUIThemeProvider theme={appliedTheme}>
      <CssBaseline />
      {children}
    </MUIThemeProvider>
  );
}
