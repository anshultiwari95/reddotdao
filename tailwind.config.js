/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors');

module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        orbitron: ['Orbitron', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
      colors: {
        neonBlue: '#00f0ff',
        customBlue: colors.blue,
        customSlate: colors.slate,
        customRose: colors.rose,
        customAmber: colors.amber,
        customZinc: colors.zinc,
        customGray: colors.gray,
      },
       animation: {
    'spin-slow': 'spin 20s linear infinite',
    'spin-reverse-slow': 'spin-reverse 30s linear infinite',
  },
  keyframes: {
    'spin-reverse': {
      from: { transform: 'rotate(360deg)' },
      to: { transform: 'rotate(0deg)' },
    },
  },
    },
  },
  plugins: [],
};
