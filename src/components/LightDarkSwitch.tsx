'use client';

import IconButton from '@mui/material/IconButton';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { useEffect, useState } from 'react';
import { useTheme } from '@mui/material/styles';

export function LightDarkSwitch() {
  const theme = useTheme();
  const [mode, setMode] = useState<'light' | 'dark'>(theme.palette.mode);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    console.log('LightDarkSwitch.tsx Not mounted');
    return null; // Prevents mismatched class names during hydration
  }

  const toggleColorMode = () => {
    console.log('LightDarkSwitch.tsx toggleColorMode triggering');
    const newMode = mode === 'dark' ? 'light' : 'dark';
    console.log('LightDarkSwitch.tsx newMode, setting', newMode);
    setMode(newMode);
    window.location.href = `/api/theme?theme=${newMode}`;
  };

  return (
    <IconButton sx={{ ml: 1 }} onClick={toggleColorMode} color="inherit">
      {mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
    </IconButton>
  );
}
