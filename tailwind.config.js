/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: "600px",
      md: "720px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    colors: {
      primary: "#C7BCF6",
      error: "#FF5B52",
      warning: "#F1C64D",
      info: "#95EEF1",
      success: "#8CEA94",
      background: {
        darker: "#0D0E16",
        dark: "#22253A",
        "dark-transparent": "#22253ACC",
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
        strong: "0rem 1.2rem 1.2rem rgba(0, 0, 0, 0.6)",
      },
    },
  },
  plugins: [],
};
