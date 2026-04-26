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
        // Remapped to gold/navy — all components using these classes update automatically
        lightHover: '#ECEAE5',   // was light gray, now warm off-white hover (light mode)
        darkHover:  '#1C2230',   // was dark gray, now navy card hover (dark mode)
        darkTheme:  '#0D1117',   // was dark gray, now deep navy background
      },
      fontFamily: {
        Inter: ["Inter", "sans-serif"],
        Sora:  ["Sora", "sans-serif"],
        // Ovo aliased to Sora — fixes all 40 font-Ovo references without touching components
        Ovo:   ["Sora", "sans-serif"],
      },
      boxShadow: {
        'black': '4px 4px 0 #000',
        'white': '4px 4px 0 #fff',
      },
      gridTemplateColumns: {
        'auto': 'repeat(auto-fit,minmax(200px, 1fr))',
      },
    },
  },
  darkMode: 'selector',
  plugins: [],
};
