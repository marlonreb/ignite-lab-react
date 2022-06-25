/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.tsx'
  ],
  theme: {
    extend: {
      backgroundImage: {
        blur: 'url(/src/assets/blur-background.png)'
      },
      fontFamily: {
        sans: 'Roboto, sans-serif',
      },
      colors: {
        green:{
          300: '#00B37E',
          500: '#00875F',
          700: '#015F43',
        },
        blue: {
          500: '#81D8F7',
        },
        orange: {
          500: '#FBA64C',
        },
        red: {
          500: '#F75A68',
        },
        gray: {
          300: '#E1E1E6',
          400: '#C4C4CC',
          500: '#8D8D99',
          600: '#323238',
          700: '#29292E',
          800: '#121214',
          900: '#09090A',
        }
      }
    },
  },
  plugins: [],
}
