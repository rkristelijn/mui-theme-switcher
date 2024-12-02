'use client';

import IconButton from '@mui/material/IconButton';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { useEffect, useState } from 'react';
import { useTheme } from '@mui/material/styles';

// todo: read the current theme from the useTheme hook
// but it is already setting the cookie, makes sense to have only one effect medium... 🤔
// we should redirect to /theme?theme=dark or /theme?theme=light instead

export function LightDarkSwitch() {
  const theme = useTheme();
  // const [mode, setMode] = useState<'light' | 'dark'>('light');
  const [mode, setMode] = useState<'light' | 'dark'>(theme.palette.mode);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // console.log('LightDarkSwitch.tsx useEffect triggering');
    // const storedTheme = document.cookie
    //   .split('; ')
    //   .find((row) => row.startsWith('theme='))
    //   ?.split('=')[1];
    // console.log('LightDarkSwitch.tsx storedTheme (from cookie):', storedTheme);
    // setMode(storedTheme === 'dark' ? 'dark' : 'light');
    // console.log('LightDarkSwitch.tsx Mode set:', storedTheme);
    setMounted(true);
  }, []);

  if (!mounted) {
    console.log('LightDarkSwitch.tsx Not mounted');
    return null; // Prevents mismatched class names during hydration
  }

  const toggleColorMode = () => {
    console.log('LightDarkSwitch.tsx toggleColorMode triggering');
    const newMode = mode === 'dark' ? 'light' : 'dark';
    console.log('LightDarkSwitch.tsx newMode, setting in cookie:', newMode);
    // document.cookie = `theme=${newMode}; path=/`;
    console.log('LightDarkSwitch.tsx Setting theme:', newMode);
    setMode(newMode);
    // window.location.reload(); // Reload to apply the new theme
    // fetch(`/api/theme?theme=${newMode}`).then(() => {
    //   console.log('LightDarkSwitch.tsx fetch done');
    //   // window.location.reload(); // Reload to apply the new theme
    // });
    window.location.href = `/api/theme?theme=${newMode}`;
  };

  return (
    <IconButton sx={{ ml: 1 }} onClick={toggleColorMode} color="inherit">
      {mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
    </IconButton>
  );
}
