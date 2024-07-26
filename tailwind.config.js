/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{jsx,js}"],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
      spacing: {
        'negative-4': '-1rem',
      },
      borderWidth: {
        '2': '2px',
      },
      transitionProperty: {
        'width': 'width',
      },
      blur: {
        '25': '25px',
        '100': '100px',
        '150': '150px',
        '200': '200px',
        '300': '300px',
      },
      width: {
        '48': '12rem',
        '64': '16rem',
        '80': '20rem',
        '96': '24rem',
        '36': '10rem',
        '200': '50rem',
      },
      height: {
        '48': '12rem',
        '64': '16rem',
        '80': '20rem',
        '96': '24rem',
        '36': '10rem',
        '200': '50rem',
      },
    },
  },
  plugins: [],
}
