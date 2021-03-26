const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      'oswald': ['Oswald', 'sans-serif'],
      'roboto': ['"Roboto Condensed"', 'sans-serif'], // Ensure fonts with spaces have " " surrounding it.
    },
    width: {
      '175': '175px',
      '8/12': '66.666667%',
      'full': '100%',
      '4/12': '33.333333%',
    },
    colors: {
      gray: colors.warmGray,
      white: colors.white,
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
