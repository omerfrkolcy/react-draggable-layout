/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    fontFamily: {
      sans: ['Inter', 'sans-serif'],
    },
    extend: {
      keyframes: {
        shake: {
          '0%': { transform: 'rotate(-5deg)' },
          '50%': { transform: 'rotate(5deg)' },
          '100%': { transform: 'rotate(-5deg)' },
        },
      },
      animation: {
        shake: 'shake 0.5s infinite ease',
      },
      boxShadow: {
        'custom-light': '0 0 1em #4096a6',
        'custom-dark': '0 0 1em #a8ffdfa8',
      },
    },
  },
  variants: {
    extend: {
      boxShadow: ['hover'],
    },
  },
  plugins: [],
};
