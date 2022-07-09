/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      // Need to define a global color scheme for all apps
      primary: "#C7BCF6",
      secondary: "#413A7E",
      white: "#ffffff",
      background: {
        dark: "#0d0e16"
      }
    },
  extend: {},
  },
  plugins: [],
};
