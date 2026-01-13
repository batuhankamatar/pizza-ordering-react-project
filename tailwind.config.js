/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'Roboto-Condensed': ['"Roboto Condensed"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
