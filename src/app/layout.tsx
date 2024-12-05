import * as React from 'react';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter';
import CustomThemeProvider from '@/components/CustomThemeProvider';
import InitColorSchemeScript from '@mui/material/InitColorSchemeScript';

export const metadata = {
  title: 'Next.js App Router + Material UI',
  description: 'Server-side Theme Switching with MUI',
};

export default function RootLayout(props: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <InitColorSchemeScript attribute='class' />
        <AppRouterCacheProvider options={{ enableCssLayer: true }}>
          <CustomThemeProvider>{props.children}</CustomThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
