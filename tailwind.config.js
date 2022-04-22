const colors = require('tailwindcss/colors')

function withOpacityValue(variable) {
  return ({ opacityVariable, opacityValue }) => {
    if (opacityValue !== undefined) {
      return `rgba(var(${variable}), ${opacityValue})`
    }
    if (opacityVariable !== undefined) {
      return `rgba(var(${variable}), var(${opacityVariable}, 1))`
    }
    return `rgb(var(${variable}))`
  }
}

module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/containers/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    container: {
      padding: {
        DEFAULT: '1rem',
        xl: '5rem',
        '2xl': '6rem'
      }
    },
    extend: {
      animation: {
        'fade-in': 'fade-in 0.5s linear forwards',
        'fade-out': 'fade-out 0.5s linear forwards'
      },
      lineClamp: {
        7: '7',
        8: '8',
        9: '9',
        10: '10',
        11: '11',
        12: '12',
        13: '13',
        14: '14',
        15: '15'
      },
      fontFamily: {
        poppins: ['POPPINS', 'sans-serif'],
        sarabun: ['SARABUN', 'sans-serif'],
        prompts: ['PROMPT', 'sans-serif'],
        kanits: ['KANIT', 'sans-serif']
      },
      colors: {
        primary: `rgb(var(--tw-color-primary))`,
        secondary: withOpacityValue('--tw-color-secondary'),
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
  plugins: [require('@tailwindcss/typography'), require('@tailwindcss/line-clamp')]
}
