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
      'grey-100': '#F3F4F6',
      'grey-300': '#D1D5DB',
      'grey-500': '#6B7280',
      'grey-700': '#374151',
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
      backgroundImage: {
        'madrid': "url('/public/img/madrid.jpeg')",
        'barcelona': "url('/public/img/barcelona.jpeg')",
        'galicia': "url('/public/img/galicia.jpeg')",
        'alicante': "url('/public/img/alicante.jpeg')",
        'murcia': "url('/public/img/murcia.jpeg')",
        'sevilla': "url('/public/img/sevilla.jpeg')",
        'valencia': "url('/public/img/valencia.jpg')",    
      },
    }
  },
  plugins: [
  ],
};