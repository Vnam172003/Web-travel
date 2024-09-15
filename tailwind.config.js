/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        black: '#000',
        white: '#fff',
        grey: '#717171',
        primary: '#FF385C',
        Lightgrey: '#EBEBEB',
        grey1: '#EBEBEB'
      }
    },
    plugins: []
  }
}
