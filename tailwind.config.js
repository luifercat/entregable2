/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  //content: [],
  theme: {
    extend: {},
    fontFamily: {
      lato: ["Lato", "sans-serif"], //fuente para usar en tailwind
    },
  },
  plugins: [],
};
