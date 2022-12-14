/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ['index.html', './src/**/*.jsx'],
  theme: {
    screens: {
      "xs": "475px",
      ...defaultTheme.screens,
    },
    extend: {},
  },
  plugins: [],
}
