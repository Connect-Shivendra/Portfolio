//import { Geist, Geist_Mono } from "next/font/google"; //29/01/24 This is the fonts on the Webpage

import {Outfit, Ovo} from "next/font/google";
import "./globals.css";

/* 29/01/24
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
*/

const outfit = Outfit({
  subsets: ["latin"], weight: ["400","500","600","700"]
});

const ovo = Ovo({
  subsets: ["latin"], weight: ["400"]
});


// This is the Title on the browser Tab //29/01/24
export const metadata = {
  title: "Portfolio - Data & Analytics",
  description: "Share Data Knowledge to the world #Free",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${outfit.className} ${ovo.className} antialiased leading-8
        overflow-x-hidden dark:bg-darkTheme
        dark:text-white`}
      >
        {children}
      </body>
    </html>
  );
}
