/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        title: ["Dancing Script", "cursive"],
        paragraph: ["Poppins", "sans-serif"],
      },
      colors: {
        purple: {
          100: "#F3EFFF",
          200: "#E0D2FF",
          300: "#C7B2FF",
          400: "#A783FF",
          500: "#7A4FFF",
          600: "#653BFF",
          700: "#4F2AFF",
          800: "#3A1AFF",
          900: "#2A0DFF",
        },
        green: {
          50: "#f5f9fa",
          100: "#ebf2f3",
          200: "#d2e2e5",
          300: "#a6c6cb",
          400: "#7eacb2",
          500: "#5d929a",
          600: "#497780",
          700: "#3c6068",
          800: "#355157",
          900: "#30464a",
          950: "#202d31",
        },
      },
    },
  },
  plugins: [],
};
