"use client";

import { createTheme } from "@mui/material";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#1C1C1C",
    },
    secondary: {
      main: "#EBEB5E",
    },
    background: {
      default: "#1C1C1C",
      paper: "#333333",
    },
    text: {
      primary: "#EBEB5E",
    },
  },
  typography: {
    fontFamily: ["Inter", "sans-serif"].join(","),
  },
});
