import { Inter, Sora } from "next/font/google";
import "./globals.css";
import { ErrorBoundary } from "@/app/components/ErrorBoundary";
import ScrollToTopWrapper from "@/app/components/ScrollToTopWrapper";
import { DarkModeProvider } from './context/DarkModeContext';
import { Analytics } from '@vercel/analytics/react';

// Configure Inter font for body text
const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"], // Common weights for body
  variable: "--font-inter", // Optional CSS variable
});

// Configure Sora font for headings (used via Tailwind classes)
const sora = Sora({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"], // Common weights for headings
  variable: "--font-sora", // Optional CSS variable
});


// This is the Title on the browser Tab
export const metadata = {
  metadataBase: new URL('https://shivendra.io'),
  title: {
    default: "Portfolio - Data & Analytics",
    template: "%s | Portfolio"
  },
  description: "Share Data Knowledge to the world #Free",
  keywords: ['Data Analytics', 'Data Strategy', 'Data Governance', 'Business Intelligence'],
  authors: [{ name: 'Shivendra Singh' }],
  creator: 'Shivendra Singh',
  openGraph: {
    type: 'website',
    locale: 'en_AU',
    url: 'https://shivendra.io',
    title: 'Portfolio - Data & Analytics',
    description: 'Share Data Knowledge to the world #Free',
    siteName: 'Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Portfolio - Data & Analytics',
    description: 'Share Data Knowledge to the world #Free',
    creator: '@your-twitter-handle',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-site-verification',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
      </head>
      {/* Apply Inter font to the body, Sora is applied via Tailwind classes */}
      {/* Removed dark:bg-darkTheme to rely on CSS variable --background */}
      <body
        className={`${inter.variable} ${sora.variable} ${inter.className} antialiased leading-8
        overflow-x-hidden 
        dark:text-white`}
      >
        <DarkModeProvider>
          <ErrorBoundary>
            <ScrollToTopWrapper />
            {children}
          </ErrorBoundary>
        </DarkModeProvider>
        <Analytics />
      </body>
    </html>
  );
}

/*
Original font imports:
import {Outfit, Ovo} from "next/font/google";
const outfit = Outfit({
  subsets: ["latin"], weight: ["400","500","600","700"]
});
const ovo = Ovo({
  subsets: ["latin"], weight: ["400"]
});
Applied to body: className={`${outfit.className} ${ovo.className} ...`}
*/

