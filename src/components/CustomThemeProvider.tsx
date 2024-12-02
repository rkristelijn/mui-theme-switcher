'use client';

import React, { useEffect, useState } from 'react';
import { ThemeProvider as MUIThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

const lightTheme = createTheme({
  palette: {
    mode: 'light',
  },
});

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
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

    if (storedTheme) {
      setTheme(storedTheme === 'dark' ? 'dark' : 'light');
    } else {
      const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
      console.log('CustomThemeProvider.tsx prefersDarkMode:', prefersDarkMode);
      setTheme(prefersDarkMode ? 'dark' : 'light');
    }

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
