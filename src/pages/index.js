import * as React from "react";

import {
  ThemeProvider,
  createTheme,
  responsiveFontSizes,
} from "@mui/material/styles";
import Home from "./home";

const theme = createTheme({
  palette: {
    primary: {
      main: "#f17720",
    },
    secondary: {
      main: "#0474ba",
    },
  },
  typography: {
    fontFamily: "Noto Sans",
    fontWeightLight: 400,
    fontWeightRegular: 500,
    fontWeightMedium: 600,
    fontWeightBold: 700,
    h2: {
      fontWeight: 700,
      fontSize: "44px",
    },
    h4: {
      fontWeight: 700,
      fontSize: "26px",
    },
    h6: {
      fontWeight: 600,
      fontSize: "19px",
    },
    subtitle1: {
      fontWeight: 500,
      fontSize: "19px",
    },
    subtitle2: {
      fontWeight: 500,
      fontSize: "14px",
      p: 0,
      b: 0
    },

    body1: {
      fontWeight: 500,
      fontSize: "15px",
    },
  },
});

var IndexPage = () => {
  let myTheme = responsiveFontSizes(theme);
  return (
    <>
      <style>{`
         body{
           margin: 0px;
           padding: 0px;
          }
          `}</style>
      <ThemeProvider theme={myTheme}>
        <Home />
      </ThemeProvider>
    </>
  );
};
export default IndexPage;
