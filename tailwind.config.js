/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        mobile: { max: "767px", min: "320px" },
        tablet: { max: "1024px", min: "768px" },
        desktop: { min: "1024px" },
      }
    },
    colors: {
      foreground: '#03193A',
      green: {
        primary: '#01AF70',
      },
      red: {
        1: '#FF654F',
        2: '#FF0960',
      },
      blue: {
        DEFAULT: '#3555FF',
      },
      azure: {
        18: '#12294A',
        84: '#CAD3E1',
      },
      nepal: {
        DEFAULT: '#90A2BD',
        1: '#F5F9FF',
        2: '#1d3353',
        3: '#1A3157',
      },
    },
    fontFamily: {
      jost: ['Jost', 'sans-serif'],
    },
  },
  plugins: [],
}

