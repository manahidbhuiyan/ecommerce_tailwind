/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./index.html","./assets/**/*.js"],
    theme: {
      extend: {
        fontFamily:{
          'Montserrat': ['"Montserrat", sans-serif']
        }
      },
    },
    plugins: [],
  }