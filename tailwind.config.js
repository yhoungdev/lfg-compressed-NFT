/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        accent: "#34275f",
        sidebar: "#15151d",
      },
      fontFamily: {
        oxanium: ["Oxanium", "sans-serif"],
      },
    },
  },
  plugins: [],
};
