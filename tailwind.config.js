/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./public/index.html",
    "./src/**/*.{html,js}",
    "./public/registration.html",
  ],
  darkMode: "class",
  theme: {
    extend: {
      backgroundImage: {
        sanFrancisco: "url('../imgsanFrancisco.jpg')",
        bali: "url('../img/bali.jpg')",
        chicago: "url('../img/chicago.jpg')",
        europe: "url('../img/europe.jpg')",
        iceland: "url('../img/iceland.jpg')",
        LA: "url('../img/LA.jpg')",
        miami: "url('../img/miami.jpg')",
        newYork: "url('../img/newYork.jpg')",
        norway: "url('../img/norway.jpg')",
        sanFrancisco: "url('../img/sanFrancisco.jpg')",
        sanFranciscoDesktop: "url('../img/sanFranciscoDesktop.jpg')",
        seattle: "url('../img/seattle.jpg')",
        switzerland: "url('../img/switzerland.jpg')",
        sidney: "url('../img/sydney.jpg')",
        yosemite: "url('../img/yosemite.jpg')",
      },
      backgroundColor: (theme) => ({
        ...theme("colors"),
        primary: "#CC2D4A",
        secondary: "#8FA206",
        terciary: "#61AEC9",
      }),
      textColor: (theme) => ({
        ...theme("colors"),
        primary: "#CC2D4A",
        secondary: "#8FA206",
        terciary: "#61AEC9",
      }),
      fontFamily: {
        Montserrat: ["Montserrat", "sans-serif"],
      },
      screens: {
        sm: "767px",
        // => @media (min-width: 576px) { ... }

        md: "768px",
        // => @media (min-width: 960px) { ... }

        lg: "1024px",
        // => @media (min-width: 1440px) { ... }
      },
    },
  },
  variants: {
    width: ["responsive", "hover", "focus"],
    extend: {},
  },
  plugins: [
    require("tailwind-scrollbar-hide"),
    require("tailwindcss-no-scrollbar"),
  ],
};
