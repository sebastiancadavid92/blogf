/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {      
      colors: {
        customBlue: '#004cd4',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}

