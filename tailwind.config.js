/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      colors: {
        nutmeg: "	#854632",
        raspberry: "#7b284f",
        roseWhite: "#fff5fa",
        eggShell: "#f3e6d8",
        lightGrey: "#e4ded8",
        wengeBrown: "#5f574e",
        darkCharcoal: "#302d2c",
      },
      fontFamily: {
        Out: ["Outfit"],
        Young: ["Young Serif"],
      },
    },
  },
  plugins: [],
};
