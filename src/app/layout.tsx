import "./globals.css";
import '@/app/styles/sections/paginate-home.scss';
import ThemeProviderApp from "@/theme/ThemeProviderApp";
import { createTheme } from "@mui/material";

import { Poppins } from 'next/font/google';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'], // choose weights you need
})

const theme = createTheme({
  typography: {
    fontFamily: `'Motley Forces', 'Roboto', 'Helvetica', 'Arial', sans-serif`,
  },
});


export const metadata = {
  title: 'Book Reading',
  description: 'Read your favorite books',
}


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={poppins.className}
      >
        <ThemeProviderApp >
          {children}
        </ThemeProviderApp>
      </body>
    </html>
  );
}
