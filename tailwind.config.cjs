/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: false,
  theme: {
    extend: {
      fontFamily: {
        "hubot-sans-narrow": ["Hubot Sans Bold Narrow", "sans-serif"],
      },
    },
  },
  plugins: [],
};
