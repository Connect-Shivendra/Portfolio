import { Inter, Sora } from "next/font/google";
import "./globals.css";

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
  title: "Portfolio - Data & Analytics",
  description: "Share Data Knowledge to the world #Free",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      {/* Apply Inter font to the body, Sora is applied via Tailwind classes */}
      {/* Removed dark:bg-darkTheme to rely on CSS variable --background */}
      <body
        className={`${inter.variable} ${sora.variable} ${inter.className} antialiased leading-8
        overflow-x-hidden 
        dark:text-white`}
      >
        {children}
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

