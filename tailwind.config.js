/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        mulberry: {
          50: "#fcf3f9",
          100: "#f9eaf4",
          200: "#f5d5ea",
          300: "#eeb3d8",
          400: "#e284bd",
          500: "#d65ea3",
          600: "#c34186",
          700: "#a72f6b",
          800: "#8b2959",
          900: "#74274d",
          950: "#46112b",
        },
      },
    },
  },
  plugins: [],
};
