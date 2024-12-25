/** @type {import('tailwindcss').Config} */
const plugin = require("tailwind-scrollbar");

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
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

