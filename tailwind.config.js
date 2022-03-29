const colors = require('tailwindcss/colors')

module.exports = {
  content: ['./src/pages/**/*.{js,ts,jsx,tsx}', './src/components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['POPPINS', 'sans-serif'],
        sarabun: ['SARABUN', 'sans-serif'],
        prompts: ['PROMPT', 'sans-serif']
      },
      colors: {
        primary: '#364ad9',
        secondary: '',
        transparent: 'transparent',
        current: 'currentColor',
        black: colors.black,
        white: colors.white,
        gray: colors.slate,
        green: colors.emerald,
        purple: colors.violet,
        yellow: colors.amber,
        pink: colors.fuchsia
      }
    }
  },
  plugins: [require('@tailwindcss/typography')]
}
