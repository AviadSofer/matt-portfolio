/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#6e07f3',
        lightGrey: '#e6ecf8',
        darkBlue: '#141c3a',
        font: '#141c3a',
      },
    },
  },
  plugins: [],
};
