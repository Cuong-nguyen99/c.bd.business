/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
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
        ywGray8: "#F2F2F2",
        ywGray9: "#E7E7E7",
        ywGray10: "#666666",
        ywBlue0: "#EDF7FE",
        ywBlue1: "#E9F5FE",
        ywBlue2: "#CBE6FC",
        ywBlue3: "#AAD7FB",
        ywBlue4: "#7FC2FA",
        ywBlue5: "#53AAF8",
        ywBlue6: "#1D5A83",
        ywBlue7: "#F4FBFF",
        ywBlue8: "#B6E1FF",
        ywBlue9: "#D9EFFF",
        ywBlue10: "#EFF7FD",
        ywBlue11: "#98D5FF",
        ywBlue12: "#FAFDFF",
      }
    }
  },
  plugins: [],
}
