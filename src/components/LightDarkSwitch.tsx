'use client';

import { IconButton } from '@mui/material';
import { useEffect, useState } from 'react';
import { useColorScheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { Brightness4, Brightness7 } from '@mui/icons-material';
import type { Mode } from '@mui/system/cssVars/useCurrentColorScheme';

export const LightDarkSwitch = () => {
  const { mode, setMode } = useColorScheme(); // 'system' | 'light' | 'dark'
  const [mounted, setMounted] = useState(false);
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)'); // needed for checking the user preferred color scheme when system mode is selected

  const handleDarkLightMode = (currentMode: Mode | undefined) => (currentMode === 'dark' ? 'light' : 'dark');
  const handleSystemMode = () => (prefersDarkMode ? 'light' : 'dark');

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null; // Prevents mismatched class names during hydration
  }

  const toggleColorMode = () => {
    const newMode = mode === 'system' ? handleSystemMode() : handleDarkLightMode(mode);
    setMode(newMode);
  };

  return (
    <IconButton sx={{ ml: 1 }} onClick={toggleColorMode} color="inherit">
      {mode === 'dark' ? <Brightness7 /> : <Brightness4 />}
    </IconButton>
  );
};
