/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#2DAAFF",
        ywGray: "#818181",
        ywGray1: "#808080",
        ywGray2: "#C4C4C4",
        ywGray3: "#F7F7F7",
        ywGray4: "#999999",
      }
    },
  },
  plugins: [],
}
