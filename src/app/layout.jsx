import React from "react";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import OverlayMenu from "@/components/ui/OverlayMenu";
import AOSInit from "@/components/animation/AOSInit";
import Footers from "@/components/layout/Footer";

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
    { label: "Home", href: "/" },
    { label: "About", href: "/about_me" },
    { label: "Portofolio", href: "/portfolio" },
    { label: "Archive", href: "/archive" },
    { label: "Contact", href: "/contact_me" },
  ];

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased `}
      >
        <main className="bg-black text-white">
          <AOSInit>
            <OverlayMenu menuItems={menuItems} />
            {children}
            <Footers />
          </AOSInit>
        </main>
      </body>
    </html>
  );
}
