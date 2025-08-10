'use client';

import * as React from 'react';
import { ThemeProvider, CssBaseline, useMediaQuery } from '@mui/material';
import { getAppTheme } from './theme';

export default function ThemeProviderApp({ children }: { children: React.ReactNode }) {
  const prefersDark = useMediaQuery('(prefers-color-scheme: dark)');
  const [mode, setMode] = React.useState<'light' | 'dark'>(prefersDark ? 'dark' : 'light');

  const theme = React.useMemo(() => getAppTheme(mode), [mode]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <button
        onClick={() => setMode((m) => (m === 'light' ? 'dark' : 'light'))}
        style={{
          position: 'fixed',
          bottom: 20,
          right: 20,
          padding: '8px 12px',
          borderRadius: 8,
          background: theme.palette.primary.main,
          color: theme.palette.primary.contrastText,
          border: 'none',
          cursor: 'pointer',
        }}
      >
        Toggle {mode === 'light' ? 'dark' : 'light'}
      </button>
      {children}
    </ThemeProvider>
  );
}
