import React from 'react';
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import OverlayMenu from '@/components/ui/OverlayMenu';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Calista",
  description: "Get to know Calista",
};

export default function RootLayout({ children }) {
  const menuItems = [
    { label: 'Home', href: '/' },
    { label: 'Software', href: '/web' },
    { label: 'Mograph', href: '/mograph' },
    { label: 'Artwork', href: '/artwork' },
  ];

   return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-black text-white`}>
  <main>
    <OverlayMenu menuItems={menuItems} />
    {children}
  </main>
</body>

    </html>
  );
}