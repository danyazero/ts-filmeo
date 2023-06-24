/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: "#F37515",
        secondary: "#1C2024",
        secondaryLight: "#272c31",
        secondaryText: "#606366",
        nav: "#1f2426",
      }
    },
  },
  plugins: [],
}
