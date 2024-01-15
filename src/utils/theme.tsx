import { createTheme, ThemeOptions } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    secondary: {
      main: "#e0e0e0",
      light: "#e0e0e0",
      dark: "#e0e0e0",
      contrastText: "#000000",
    },
    primary: {
      main: "#003366",
      dark: "#003366",
      light: "#003366",
      contrastText: "#ffffff",
    },
    info: {
      main: "#336699",
      dark: "#336699",
      light: "#336699",
      contrastText: "#ffffff",
    },
    success: {
      main: "#CBFF98",
      light: "#CBFF98",
      dark: "#CBFF98",
    },
  },
  typography: {
    h1: {
      fontWeight: 700,
      fontSize: 25,
      color: "#262626",
    },
    h2: {
      fontWeight: 600,
      fontSize: 22,
      color: "#262626",
    },
    h3: {
      fontWeight: 600,
      fontSize: 20,
      color: "#262626",
    },
    h4: {
      fontWeight: 600,
      fontSize: 18,
      color: "#262626",
    },
    h5: {
      fontWeight: 600,
      fontSize: 16,
      color: "#262626",
    },
    h6: {
      fontWeight: 600,
      fontSize: 14,
      color: "#262626",
    },
    body1: {
      width: "100%",
      fontSize: "14px",
    },
    body2: {
      overflowX: "hidden",
      textOverflow: "ellipsis",
      whiteSpace: "nowrap",
      width: "100%",
      fontSize: "12px",
    },
    subtitle1: {
      fontWeight: 500,
      fontSize: 16,
      color: "#262626",
    },
    subtitle2: {
      fontWeight: 500,
      fontSize: 14,
      color: "#262626",
    },
    caption: {
      fontSize: "10px",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: "50px", // Adjust the value based on your preference for rounding the button
          backgroundColor: "#e0e0e0", // Light grey background color
          color: "#000000", // Black text color
          textTransform: "capitalize", // Capitalize the text
        },
      },
    },
    MuiSelect: {
      styleOverrides: {
        select: {
          padding: "11.065px 14px !important", // Adjust padding as needed
          fontSize: "1rem", // Adjust font size as needed
        },
      },
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280,
      // Add or adjust breakpoints as needed
      "2xl": 1536,
    },
  },
} as ThemeOptions);