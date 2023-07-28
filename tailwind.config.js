/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        'lg': 'repeat(auto-fill, 24rem)',
        'sm': 'repeat(auto-fill, min(48%, 11rem))'
      },
      maxWidth: {
        'lgp': '26rem',
      },
      dropShadow: {
        'fl': '3px 3px 10px rgba(243, 117, 21, 1)'
      },
      colors: {
        primary: "#F37515",
        // secondaryDark: "#1C2024",
        secondaryDark: "#100e1a",
        secondary: "#fff",
        // secondaryLight: "#272c31",
        secondaryLight: "#1f1b2e",
        secondaryLightDark: "#eeeeee",
        secondaryText: "#606366",
        nav: "#e7e7e7",
        navDark: "#1f2426",
      },
    },
  },
  plugins: [],
}
