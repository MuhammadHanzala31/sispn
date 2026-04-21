import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import 'remixicon/fonts/remixicon.css'

import "./globals.css";
import Navbar from "./(components)/Navbar";
import Footer from "./(components)/Footer";
import AOSProvider from "./(components)/AosWrapper";
import { Toaster } from "react-hot-toast";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sispn Tech",
  description: "sispn tech",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >

      <body className="h-screen flex flex-col relative">
        <Navbar />
        <Toaster/>
        <AOSProvider>
          {children}
        </AOSProvider>
        <Footer />
      </body>
    </html>
  );
}
