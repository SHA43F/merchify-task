/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px"
    },
    extend: {
      colors: {
        primaryColor: "#57ACDC",
        headingColor: "#081e21",
        smallTextColor: "#193256"
      },
      fontFamily: {
        CustomFont: ["Montserrat", "sans-serif"]
      }
    }
  },
  plugins: []
};
