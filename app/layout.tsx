import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { TopBar } from "./components/top-bar";
import { Header } from "./components/header";
import { SnowfallEffect } from "./components/snowfall-effect";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Al Fajer Mart - Premium Organic Products",
  description: "Al Fajer Mart - Your trusted source for premium organic products from Kashmir",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <SnowfallEffect />
        <TopBar />
        <Header />
        {children}
      </body>
    </html>
  );
}
