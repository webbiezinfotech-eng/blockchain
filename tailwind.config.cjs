/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  darkMode: ['class', '[data-theme="dark"]'],
  theme: {
    extend: {
      colors: {
        brand: {
          blue: '#0063B6',
        },
      },
      fontFamily: {
        heading: ['Oswald', 'sans-serif'],
      },
      maxWidth: {
        layout: '1400px',
      },
    },
  },
  plugins: [],
};
