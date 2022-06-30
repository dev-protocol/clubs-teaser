/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        accent: "#007FF3",
      },
      keyframes: {
        spin: {
          '0%': { transform: 'rotate(45deg)' },
          '90%': { transform: 'rotate(2205deg)' },
          '100%': { transform: 'rotate(2205deg)' },
        },
        'switch-a-fadeIn': {
          '0%': { opacity: 0 },
          '50%': { opacity: 100 },
          '100%': { opacity: 100 },
        },
        'switch-a-leftToRight': {
          '0%': { transform: 'scale(0.9) translateX(0%)' },
          '50%': { transform: 'scale(1) translateX(100%)' },
          '100%': { transform: 'scale(1) translateX(100%)' },
        },
        'stretch-a': {
          '0%': { 'padding-top': '0' },
          '30%': { 'padding-top': '0' },
          '50%': { 'padding-top': '50%' },
          '96%': { 'padding-top': '50%' },
          '100%': { 'padding-top': '0' },
        },
        'stretch-b': {
          '0%': { 'padding-top': '0' },
          '30%': { 'padding-top': '0' },
          '50%': { 'padding-top': '80%' },
          '90%': { 'padding-top': '80%' },
          '94%': { 'padding-top': '0' },
          '100%': { 'padding-top': '0' },
        },
        'loop-a': {
          '0%': {
            transform: 'translateX(100%)'
          },
          to: {
            transform: 'translateX(-100%)'
          }
        },
        'loop-b': {
          '0%': {
            transform: 'translateX(0)'
          },
          to: {
            transform: 'translateX(-200%)'
          }
        }
      }
    },
  },
  plugins: [],
};
