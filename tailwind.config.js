module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      "be-vietnam-pro": ["Be Vietnam Pro", "sans-serif"],
      primary: "Be Vietnam Pro, sans-serif",
      secondary: "Be Vietnam Pro, sans-serif",
    },
    container: {
      padding: {
        DEFAULT: "1rem",
        lg: "0",
      },
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1170px",
    },
    extend: {
      colors: {
        primary: "#212353",
        secondary: "#4B5D68",
        accent: {
          primary: "#F58A78",
          primary_hover: "#9059DB",
          secondary: "#F063B8",
          secondary_hover: "#E350A9",
          tertiary: "#68C9BA",
        },
      },
      backgroundImage: {
        hero: "url('../src/assets/img/hero_bg.png')",
      },
      dropShadow: {
        primary: " 0px 5px 5px rgba(75, 93, 104, 0.1)",
      },
    },
  },
  plugins: [],
};