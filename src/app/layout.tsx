import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import { MantineProvider } from "@mantine/core";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Recipeas",
  description: "Recipe for every cuisine",
};

export default function RootLayout({children} : {children: any}) {
  return (
    <html lang="en">
      <head></head>

      <body className={inter.className}>
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
