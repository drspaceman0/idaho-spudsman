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
    text: {
      main: "#000",
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
    subtitle1: {
      fontWeight: 500,
      fontSize: "19px",
    },
    subtitle2: {
      fontWeight: 500,
      fontSize: "17px",
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
    <React.Fragment>
      <ThemeProvider theme={myTheme}>
        <Home style={{ margin: 0 }} />
      </ThemeProvider>
    </React.Fragment>
  );
};
export default IndexPage;
