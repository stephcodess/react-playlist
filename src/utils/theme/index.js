import { extendTheme } from "@chakra-ui/react";
const theme = extendTheme({

  colors: {
    brand: {
      primary: "#6B6DAD",
      secondary: "#263238",
      gray: "#D9D9D9",
      success: "#05C761",
      dark: "#151313",
    },
  },
  fonts: {
    body: "Poppins, system-ui",
    heading: "Poppins, system-ui",
  },
  fontSizes: {
    xxs: "0.62rem",
    xs: "0.75rem",
    sm: "0.875rem",
    md: "1rem",
    lg: "1.125rem",
    xl: "1.25rem",
    "2xl": "1.5rem",
    "3xl": "1.875rem",
    "4xl": "2.25rem",
    "5xl": "3rem",
    "6xl": "3.75rem",
    "7xl": "4.5rem",
    "8xl": "6rem",
    "9xl": "8rem",
  },
  fontWeights: {
    hairline: 100,
    thin: 200,
    light: 300,
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
  },
  breakpoints: {
    sm: "320px",
    md: "481px",
    lg: "869px",
    xl: "1120px",
    "2xl": "1500px",
  },
});

export default theme;
