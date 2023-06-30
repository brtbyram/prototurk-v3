/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: '#32445a',
        secondary: '#2b3548'
      },
      fontSize: {
        15: '0.938rem'
      }
    },
  },
  plugins: [],
}
