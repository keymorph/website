/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    colors: {
      // Need to define a global color scheme for all apps
      primary: "#C7BCF6",
      error: "#FF5B52",
      warning: "#F1C64D",
      info: "#95EEF1",
      success: "#8CEA94",
      background: {
        darker: "#0D0E16",
        dark: "#2A2D47",
        "dark-transparent": "#2A2D47CC",
        "darkish-transparent": "#393d60CC",
      },
      text: {
        primary: "#F5F3FE",
        secondary: "#F5F3FEB3", // 70% transparency
        disabled: "#F5F3FE80", // 50% transparency
      },
    },
    extend: {
      boxShadow: {
        strong: "0rem 2rem 2rem rgba(0, 0, 0, 0.6)",
      },
    },
  },
  plugins: [],
};
