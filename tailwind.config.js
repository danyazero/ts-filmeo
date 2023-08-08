/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      scale: {
        '103': '1.03',
      },
      gridTemplateColumns: {
        'lg': 'repeat(auto-fill, 24rem)',
        'sm': 'repeat(auto-fill, min(48%, 11rem))'
      },
      maxWidth: {
        'lgp': '26rem',
      },
      colors: {
        primary: "#F37515",
        // secondaryDark: "#1C2024",
        secondaryDark: "#100e1a",
        secondary: "#E3F1FC",
        // secondaryLight: "#272c31",
        secondaryLightDark: "#1f1b2e",
        secondaryLight: "#D0E1F9",
        secondaryText: "#606366",
        nav: "#D0E1F9",
      },
    },
  },
  plugins: [],
}
