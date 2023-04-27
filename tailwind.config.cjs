/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: false,
  theme: {
    extend: {
      fontFamily: {
        "mona-sans": ["Mona Sans", "sans-serif"],
        "hubot-sans": ["Hubot Sans", "sans-serif"],
        "hubot-sans-narrow": ["Hubot Sans Bold Narrow", "sans-serif"],
      },
    },
  },
  plugins: [],
};
