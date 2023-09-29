/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    extend: {
      fontSize:{
        'p': '20px',
        'header': '32px'
      },
      colors: {
        'p': '#595959',
        'h1': '#252525',
        
      }
    },
   
  },
  plugins: [],
}