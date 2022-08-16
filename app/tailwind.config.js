/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{vue,js,ts}'],
  darkMode: 'class',
  plugins: [require('daisyui')],
  daisyui: {
    darkTheme: 'dark',
    lightTheme: 'light',
    themes: [
      {
        dark: {
          'primary': '#FAC29A',
          'secondary': '#E84A72',
          'accent': '#B877DB',
          'neutral': '#232530',
          'base-100': '#2E303E',
          'info': '#21BFC2',
          'success': '#27D796',
          'warning': '#FAB28E',
          'error': '#DA103F',
        },

        light: {
          'primary': '#F6661E',
          'secondary': '#E84A72',
          'accent': '#8931B9',
          'neutral': '#FDF0ED',
          'base-100': '#FADAD1',
          'info': '#1EAEAE',
          'success': '#1EB980',
          'warning': '#AF5427',
          'error': '#DA103F',
        },
      },
    ],
  },
  theme: {
    container: {
      center: true,
    },
  },
}
