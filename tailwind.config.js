/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        title: ["Dancing Script", "cursive"],
        paragraph: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};
