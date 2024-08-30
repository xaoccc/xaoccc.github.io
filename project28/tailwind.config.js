/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {

    extend: {
      backgroundImage: {
        'background-desktop': "url('./images/bg-desktop.svg')",
      },
      fontFamily: {
        poppins: ['"Poppins"', ...defaultTheme.fontFamily.sans],
        opensans: ['"Open Sans"', ...defaultTheme.fontFamily.sans],
      },
      maxWidth: {
        '80rem': '80rem',
      },

    }

  },
  
  plugins: [],
}

