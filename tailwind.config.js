/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'black-transclusent': '#000000',
        'white': '#fff',
        gray: {
          300: "#E8E8E8",
          200: "#DCDCDC"
        }
      }
    },

  },
  plugins: [],
}

