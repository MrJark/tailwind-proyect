/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{html,js}", "./public/*.{html,js}"],  
  theme: {
    fontFamily: {
      K2D: ['K2D'],
    },
    textColor: {
      'primary': '#09AEB3',
      'secondary': '#FF01B0',
      'terciary': '#FFDC19',
      'black': '#0B0A0B',
      'white': '#F9F9F9',
    },
    backgroundColor: theme => ({
      ...theme('colors'),
      'primary': '#09AEB3',
      'secondary': '#FF01B0',
      'terciary': '#FFDC19',
      'black': '#0B0A0B',
      'white': '#F9F9F9',
      'background-dark': '#191D1D',
      'background-light': '#F3FFFF',
    }),
    extend: {
        'madrid': "url('/public/img/madrid.jpeg')",
        'barcelona': "url('/public/img/barcelona.jpeg')",
        'galicia': "url('/public/img/galicia.jpeg')",
        'alicante': "url('/public/img/alicante.jpeg')",
        'murcia': "url('/public/img/murcia.jpeg')",
        'sevilla': "url('/public/img/sevilla.jpeg')",
        'valencia': "url('/public/img/valencia.jpeg')",    
    },
  },
  plugins: [
  ],
};