import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import "@mantine/carousel/styles.css";
import "@mantine/core/styles.css";
import { MantineProvider, ColorSchemeScript } from "@mantine/core";

// import "@mantine/carousel/styles.css";



const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Recipeas",
  description: "Recipe for every cuisine",
};

export default function RootLayout({children} : {children: any}) {
  return (
    <html lang="en">
      <head>
        <meta charset ="UTF-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        />
        <ColorSchemeScript/>
      </head>
      <body className={inter.className}>
        <MantineProvider>
          <NavBar />
          {children}
          <Footer />
        </MantineProvider>
      </body>
    </html>
  );
}
