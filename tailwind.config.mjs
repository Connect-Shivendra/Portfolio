//import { Outfit } from 'next/font/google';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Option 2: Pink & Gray
        lightHover: '#EAEAEA', // Light Gray hover/secondary (Light Mode)
        darkHover: '#404040', // Medium-Dark Gray hover/secondary (Dark Mode)
        darkTheme: '#2C2C2C' // Dark Gray background (Dark Mode)
      },
      fontFamily: {
        // Replaced Outfit/Ovo with Inter/Sora
        Inter: ["Inter", "sans-serif"],
        Sora: ["Sora", "sans-serif"]
      },
      boxShadow: {
        'black' : '4px 4px 0 #000',
        'white' : '4px 4px 0 #fff',
      },
      gridTemplateColumns: {
        'auto': 'repeat(auto-fit,minmax(200px, 1fr))'
      }
    },
  },
  darkMode: 'selector',
  plugins: [],
};

/*
Original Colors:
lightHover: '#fcf4ff',
darkHover: '#2a004a',
darkTheme: '#11001F'

Original Fonts:
Outfit: ["Outfit","sans-serif"],
Ovo: ["Ovo","serif"]


        // Option 2: Pink & Gray
        lightHover: '#EAEAEA', // Light Gray hover/secondary (Light Mode)
        darkHover: '#404040', // Medium-Dark Gray hover/secondary (Dark Mode)
        darkTheme: '#2C2C2C' // Dark Gray background (Dark Mode)
 */