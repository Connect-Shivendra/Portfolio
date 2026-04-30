import { Inter, Sora } from "next/font/google";
import "./globals.css";
import { ErrorBoundary } from "@/app/components/ErrorBoundary";
import ScrollToTopWrapper from "@/app/components/ScrollToTopWrapper";
import { DarkModeProvider } from './context/DarkModeContext';
import { Analytics } from '@vercel/analytics/react';
import { headers } from 'next/headers';

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

const sora = Sora({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-sora",
  display: "swap",
});

export const metadata = {
  metadataBase: new URL('https://shivendra.io'),
  title: {
    default: "Shivendra Singh — Head of Data, Information & AI",
    template: "%s | Shivendra Singh"
  },
  description: "Transformational data leader with 14+ years of experience in Data Strategy, Architecture, Engineering, Analytics and AI. Based in Sydney, Australia.",
  keywords: [
    'Shivendra Singh',
    'Head of Data',
    'Chief Data Officer',
    'Data Strategy',
    'Data Governance',
    'Data Architecture',
    'AI Strategy',
    'Machine Learning',
    'Business Intelligence',
    'Sydney Australia',
    'Data Leader',
    'Woolworths',
    'Optus',
  ],
  authors: [{ name: 'Shivendra Singh', url: 'https://shivendra.io' }],
  creator: 'Shivendra Singh',
  openGraph: {
    type: 'website',
    locale: 'en_AU',
    url: 'https://shivendra.io',
    title: 'Shivendra Singh — Head of Data, Information & AI',
    description: 'Transformational data leader with 14+ years of experience. Based in Sydney, Australia.',
    siteName: 'Shivendra Singh',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Shivendra Singh — Head of Data, Information & AI',
    description: 'Transformational data leader with 14+ years of experience. Based in Sydney, Australia.',
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
  alternates: {
    canonical: 'https://shivendra.io',
  },
  verification: {
    google: '5li3_tCQeKi57dlqG5L0WbS4gUv0b4VhPCKanVmAyW4',
  },
};

export default async function RootLayout({ children }) {
  // Force dynamic rendering so Next.js reads x-nonce from middleware
  // and stamps its inline bootstrap scripts with the CSP nonce.
  await headers();
  return (
    <html lang="en" className="scroll-smooth" data-scroll-behavior="smooth">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#0D1117" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://upload.wikimedia.org" />
      </head>
      <body
        className={`${inter.variable} ${sora.variable} ${inter.className} antialiased leading-relaxed overflow-x-hidden`}
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
