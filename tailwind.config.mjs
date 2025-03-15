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
        lightHover: '#fcf4ff',
        darkHover: '#2a004a',
        darkTheme: '#3d4127' //Original darkTheme was #11001F
      },
      fontFamily: {
        Outfit: ["Outfit","sans-serif"],
        Ovo: ["Ovo","serif"]
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

{/*
darkBg: '#0F172A', // Premium deep navy background
darkCard: '#1E293B', // Slightly lighter for contrast
darkText: '#E2E8F0', // Soft light gray for readability
darkAccent: '#7F1D1D', // A deep, premium red for highlights */}