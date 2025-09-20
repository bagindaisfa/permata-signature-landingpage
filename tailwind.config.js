/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "ps-dark": {
          900: "#0D1B2A", // OD1B2A
          800: "#1B263B", // 1B263B
          700: "#415A77", // 415A77
          500: "#778DA9", // 778DA9
          100: "#E0E1DD", // E0E1DD
        },
        "ps-primary": {
          DEFAULT: "#0D1B2A", // OD1B2A
          dark: "#1B263B", // 1B263B
          medium: "#415A77", // 415A77
          light: "#778DA9", // 778DA9
          pale: "#E0E1DD", // E0E1DD
        },
      },
      fontFamily: {
        sans: ["Montserrat", "sans-serif"], // ini akan jadi font default
        montserrat: ["Montserrat", "sans-serif"], // optional alias
        cinzel: ["Cinzel Decorative", "serif"],
      },
    },
  },
  plugins: [],
};
