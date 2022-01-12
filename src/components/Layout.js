import * as React from "react";
import { Link, useStaticQuery, graphql } from "gatsby";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import Footer from "./Footer";
import { Container, Grid } from "@mui/material";


import {
    ThemeProvider,
    createTheme,
    responsiveFontSizes,
} from "@mui/material/styles";

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
            fontSize: "18px",
            lineHeight: 2,
            fontFamily: "Noto Serif",
        },
        body2: {
            fontWeight: 500,
            fontSize: "15px",
            fontFamily: "Noto Serif",
        },
    },
});

export default function Layout({
    children,
    title = false,
    description = false,
    image = false,
    path = false,
}) {
    const myTheme = responsiveFontSizes(theme);

    let myTabVal = 0; // this determines which tab is selected on navbar
    switch (window.location.pathname) {
        case '/': myTabVal = 0; break;
        case '/article': myTabVal = null; break;
        default: myTabVal = null; break;
    }

    return (
        <>
            <style>{`
         body{
           margin: 0px;
           padding: 0px;
          }
          `}</style>
            <ThemeProvider theme={myTheme}>
                <Container maxWidth="lg">
                    <Navbar currentTabNum={myTabVal} />
                    <Container sx={{ px: { xs: 1, md: 6 } }}>
                        <main>{children}</main>
                    </Container>
                    <Footer />
                </Container >
            </ThemeProvider>
        </>
    );
}

