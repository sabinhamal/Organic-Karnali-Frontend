/** @type {import('tailwindcss').Config} */
const plugin = require("tailwind-scrollbar");

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        rotate: 'spinText 10s linear infinite',
        pump: 'pump 1s linear infinite'
      },
      keyframes: {
        pump: {
          "0%": { scale: "100%" },
          "50%": { scale: "110%" },
          "100%": { scale: "100%" },
        }
        ,
        spinText: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        }
      },
      scrollbar: {
        //Custom scrollbar
        width: "4px", // Thin scrollbar
        colors: {
          thumb: "rgba(255, 255, 255, 0.5)", // Thumb color
          track: "rgba(0, 0, 0, 0.1)", // Track color
        }
      }
    },
  },
  plugins: [plugin],
}

