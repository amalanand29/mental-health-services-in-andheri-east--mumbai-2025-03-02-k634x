/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"], // Ensure Tailwind scans all HTML & JS files
  theme: {
    extend: {
      colors: {
        'pastel-blue': '#A7C7E7',
        'pastel-green': '#B5EAD7',
        'pastel-yellow': '#FFDAC1',
        'pastel-pink': '#FFB7B2',
        'pastel-purple': '#C7CEEA',
        'pastel-mint': '#98D7C2',
        'dark-blue': '#3A506B',
      }
    },
  },
  plugins: [],
}
