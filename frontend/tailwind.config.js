/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter-Regular", "sans-serif"],
        italic: ["Inter-Italic", "sans-serif"],
      },
      colors: {
        primary: "#0AB101",
        secondary: "#9AEA96",
        primaryText: "#000000",
        secondaryText: "#FFFFFF",
        tertiaryText: "#828282",
        border: "#E4E4E4",
      },
    },
  },
  plugins: [],
};
