/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        neonBlue: '#00FFFF',
        darkBg: '#0a0a0a',
      },
      fontFamily: {
        techno: ['Orbitron', 'sans-serif'],
      },
      dropShadow: {
        glow: '0 0 8px #00ffff',
      },
      animation: {
        pulseSlow: 'pulse 3s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
