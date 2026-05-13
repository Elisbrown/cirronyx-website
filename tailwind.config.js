/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
  ],
  theme: {
    extend: {
      colors: {
        /* Cirronyx brand palette — extracted from logo */
        blue: {
          50:  '#f0f7fb',
          100: '#dff1f7',
          200: '#b3dbe9',
          300: '#5CB8CE',   /* light cyan (logo highlight) */
          400: '#45A6BC',
          500: '#2E94AE',   /* medium teal (logo inner cloud) */
          600: '#006890',   /* dark teal (logo primary) */
          700: '#005574',
          800: '#004058',
          900: '#002D3E',
          950: '#001D2E',
        },
        cyan: {
          50:  '#f0fafb',
          100: '#dff5f7',
          200: '#b3e7ec',
          300: '#6BC5D5',
          400: '#4DB5C5',
          500: '#2E94AE',
          600: '#2E94AE',   /* maps to medium teal */
          700: '#267a90',
          800: '#1e6172',
          900: '#164854',
        },
      },
      fontFamily: {
        sans: ['-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', 'sans-serif'],
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
