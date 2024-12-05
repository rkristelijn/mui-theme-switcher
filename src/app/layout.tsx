import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter';
import InitColorSchemeScript from '@mui/material/InitColorSchemeScript';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from '@/theme';

export const metadata = {
  title: 'Next.js App Router + Material UI',
  description: 'Server-side Theme Switching with MUI',
};

const RootLayout = (props: Readonly<{ children: React.ReactNode }>) => {
  return (
    // suppressHydrationWarning is used to prevent mismatched class names during hydration and recommended to be added to the root element
    // @see https://mui.com/material-ui/customization/css-theme-variables/configuration/#next-js-app-router
    <html lang="en" suppressHydrationWarning>
      <body
        style={{
          // This is used to prevent a flash of the light theme on page load
          transition: 'background-color 2s, color 2s',
        }}
      >
        {/* Injects a script that sets the initial color scheme based on the user's system preference or a saved preference */}
        <InitColorSchemeScript attribute="class" defaultMode="light" />
        <AppRouterCacheProvider options={{ enableCssLayer: true }}>
          {/* you can add disableTransitionOnChange to disable the transition */}
          <ThemeProvider theme={theme} disableTransitionOnChange={false}>
            <CssBaseline />
            <main>{props.children}</main>
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
};

export default RootLayout;
