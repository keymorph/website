/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  extend: {
    theme: {
      colors: {
        // Need to define a global color scheme for all apps
        primary: "#C7BCF6",
        error: "#FF5B52",
        warning: "#F1C64D",
        info: "#95EEF1",
        success: "#8CEA94",
        background: {
          dark: "#0D0E16",
        },
        text: {
          primary: "#F5F3FE",
          secondary: "#F5F3FEB3", // 70% transparency
          disabled: "#F5F3FE80", // 50% transparency
        },
      },
    },
  },
  plugins: [],
};
