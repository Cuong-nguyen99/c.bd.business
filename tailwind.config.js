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
        ywGray5: "#F1F5FF",
        ywGray6: "#C5CDE2",
        ywGray7: "#B3B3B3",
      }
    },
  },
  plugins: [],
}
