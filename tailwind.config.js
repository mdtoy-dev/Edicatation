/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        changeColor: {
          '0%': { color: 'blue' },
          '25%': { color: 'red' },
          '50%': { color: 'green' },
          '75%': { color: 'yellow' },
          '100%': { color: 'blue' },
        },
      },
      animation: {
        'change-color': 'changeColor 5s infinite', 
      },
    },
  },
  plugins: [],
}
