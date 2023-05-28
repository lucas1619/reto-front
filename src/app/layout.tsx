"use client"
import { ThemeProvider, CssBaseline, createTheme } from '@mui/material';
import { darkThemeOptions } from '../styles/theme/darkTheme';

import './globals.css'

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { Roboto } from 'next/font/google'


const inter = Roboto({ weight: ["300","400","500","700"], subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const darkTheme = createTheme(darkThemeOptions);
  return (
    <html lang="en">
      <head>
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Reto Frontend</title>
      </head>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <body className={inter.className}>{children}</body>
      </ThemeProvider>
    </html>
  )
}