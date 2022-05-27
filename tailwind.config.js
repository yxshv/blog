module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary-dark": "#1E293B",
      }
    },
  },
  darkMode: 'class',
  plugins: [require("@tailwindcss/typography")],
}
