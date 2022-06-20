/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');
module.exports = {
  mode: 'jit',
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        metal: '#19232E',
        'metal-dark': '#1f2933',
        ultramarine: '#3758FF',
      },
      boxShadow: {
        primary: '0px 4px 33px rgb(55 88 255 / 67%)',
      },
      fontFamily: {
        sans: ['Nunito', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
