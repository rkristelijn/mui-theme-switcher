# Material UI + Next.js App Router Example in TypeScript with Theme Switching and Dashboard

This document explains how to extend the Material UI + Next.js App Router TypeScript example with server-side theme switching and a small dashboard.

## Prerequisites

- Node.js (>= 16.x)
- npm or yarn

### 1. Download and Install the Example

1. Download the example using curl:

```shell
curl https://codeload.github.com/mui/material-ui/tar.gz/master | tar -xz --strip=2 material-ui-master/examples/material-ui-nextjs-ts
mv material-ui-nextjs-ts mui-theme-switcher
cd mui-theme-switcher
```

### 2. Install dependencies:

```shell
npm install
```

### 3. Start the development server:

```shell
npm run dev
```

### 4. Open http://localhost:3000 to verify the setup.

## 2. Update File Structure

Extend the existing project with the following file structure:

```
src/
  app/
  ├── layout.tsx
  ├── page.tsx
  ├── api/
  │ └── theme/route.ts
  components/
  ├── ThemeProvider.tsx
  ├── Dashboard.tsx
```

## 3. Update Code Files

`app/layout.tsx`

Modify the root layout to include a custom ThemeProvider.

```ts
import './globals.css';
import { Inter } from 'next/font/google';
import ThemeProvider from '../components/ThemeProvider';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Next.js App Router + Material UI',
  description: 'Server-side Theme Switching with MUI',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
```

`app/page.tsx`

Set up the main dashboard page.

```ts
import Dashboard from '../components/Dashboard';

export default function Home() {
  return <Dashboard />;
}
```

`app/api/theme/route.ts`

Add an API route to update the theme cookie.

```ts
import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const theme = searchParams.get('theme');

  if (!['light', 'dark'].includes(theme || '')) {
    return new NextResponse('Invalid theme', { status: 400 });
  }

  const response = NextResponse.redirect('/');
  response.cookies.set('theme', theme, { path: '/' });

  return response;
}
```

`components/ThemeProvider.tsx`

Create a custom ThemeProvider that applies the theme based on cookies.

```ts
'use client';

import React, { useEffect, useState } from 'react';
import { CssBaseline, ThemeProvider as MUIThemeProvider, createTheme } from '@mui/material/styles';

const lightTheme = createTheme({ palette: { mode: 'light' } });
const darkTheme = createTheme({ palette: { mode: 'dark' } });

export default function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  useEffect(() => {
    const storedTheme = document.cookie
      .split('; ')
      .find((row) => row.startsWith('theme='))
      ?.split('=')[1];
    setTheme(storedTheme === 'dark' ? 'dark' : 'light');
  }, []);

  const appliedTheme = theme === 'dark' ? darkTheme : lightTheme;

  return (
    <MUIThemeProvider theme={appliedTheme}>
      <CssBaseline />
      {children}
    </MUIThemeProvider>
  );
}
```

`components/Dashboard.tsx`

Build the small dashboard with a button, dropdown, and typography.

```ts
'use client';

import { Box, Button, MenuItem, Select, Typography } from '@mui/material';

export default function Dashboard() {
  const handleThemeChange = (theme: 'light' | 'dark') => {
    window.location.href = `/api/theme?theme=${theme}`;
  };

  return (
    <Box sx={{ p: 4 }}>
      <Typography variant="h4" gutterBottom>
        Dashboard
      </Typography>
      <Typography variant="body1" gutterBottom>
        This is a simple dashboard with theme-switching capabilities.
      </Typography>
      <Box sx={{ mb: 2 }}>
        <Select defaultValue="light" onChange={(e) => handleThemeChange(e.target.value as 'light' | 'dark')}>
          <MenuItem value="light">Light Theme</MenuItem>
          <MenuItem value="dark">Dark Theme</MenuItem>
        </Select>
      </Box>
      <Button variant="contained" onClick={() => alert('Button clicked!')}>
        Action Button
      </Button>
    </Box>
  );
}
```

4. Run the Project

   1. Start the development server:

npm run dev

    2.	Open http://localhost:3000 to view the dashboard.

5. Testing Theme Switching

   • Use the dropdown to switch between “Light” and “Dark” themes.
   • The preference is stored in a cookie and persists on page refresh.

6. Build and Test for Production

   1. Build the project:

npm run build

    2.	Start the production server:

npm start

    3.	Open http://localhost:3000 to verify production behavior.

Your project is now set up with Material UI, the App Router, and server-side theme switching! Let me know if you have any questions or enhancements.
