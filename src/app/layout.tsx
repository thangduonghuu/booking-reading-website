import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
// src/app/layout.tsx
import '@/app/styles/sections/paginate-home.scss';

import { Poppins } from 'next/font/google'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'], // choose weights you need
})

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
        {children}
      </body>
    </html>
  );
}
