/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    fontFamily: {
      sans: ['Inter', 'sans-serif'],
    },
    extend: {},
  },
  variants: {
    extend: {
      boxShadow: ['hover'],
    },
  },
  plugins: [],
};
