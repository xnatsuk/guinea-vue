/** @type {import('tailwindcss').Config} */
const formKitTailwind = require('@formkit/themes/tailwindcss');

module.exports = {
  content: ['./src/**/*.{vue,js,ts}', 'formkit.config.{js,ts}', 'theme.{js,ts}'],
  darkMode: 'class',
  plugins: [require('daisyui'), require('@tailwindcss/forms'),formKitTailwind],
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
          'error': '#F43E5C',
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
