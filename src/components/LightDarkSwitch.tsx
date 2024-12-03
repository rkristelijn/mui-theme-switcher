'use client';

import IconButton from '@mui/material/IconButton';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { useEffect, useState } from 'react';
import { useTheme } from '@mui/material/styles';

export function LightDarkSwitch() {
  const runOnServer = false;
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
    const newMode = mode === 'dark' ? 'light' : 'dark';
    if (runOnServer) {
      console.log('LightDarkSwitch.tsx (using server) newMode, setting', newMode);
      setMode(newMode);
      window.location.href = `/api/theme?theme=${newMode}`;
    } else {
      document.cookie = `theme=${newMode}; path=/`;
      setMode(newMode);
      // Instead of redirecting, we can reload the page to apply the new theme
      window.location.reload();
    }
  };

  return (
    <IconButton sx={{ ml: 1 }} onClick={toggleColorMode} color="inherit">
      {mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
    </IconButton>
  );
}
