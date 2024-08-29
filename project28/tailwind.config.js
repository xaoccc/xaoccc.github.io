/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      extend: {
        backgroundImage: {
          'background-desktop': "url('./images/bg-desktop.svg')",
        }
      }
    },
  },
  plugins: [],
}

