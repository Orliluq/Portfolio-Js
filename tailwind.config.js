/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'stali': [ 'Stalinist One', "sans-serif"],
      'volta': [ 'Voltaire', "sans-serif"],
      'oswald': [ 'Oswald', "sans-serif", 'Voltaire', "sans-serif"],
    },
    extend: {
      
    },
  },
  plugins: [require('tailwindcss-animated')],
}

