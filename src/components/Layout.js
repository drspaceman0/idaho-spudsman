import * as React from "react";
import { Link, useStaticQuery, graphql } from "gatsby";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import Footer from "./Footer";
import { Container, Grid } from "@mui/material";
import { Seo } from '../components/seo.js';

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
        h5: {
            fontWeight: 600,
            fontSize: "17px",

        },
        h6: {
            fontWeight: 600,
            fontSize: "19px",

        },
        subtitle1: {
            fontWeight: 500,
            fontSize: "15px",
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
        },
        body2: {
            fontWeight: 500,
            fontSize: "15px",
        },
    },
});

export default function Layout({
    children,
    title = "",
    description = "",
    image = "",
    path = "",
}) {
    const myTheme = responsiveFontSizes(theme);

    return (
        <>
            <style>{`
         body{
           margin: 0px;
           padding: 0px;
          }
          `}</style>
            <Seo title={title} description={description} image={image} path={path} />
            <ThemeProvider theme={myTheme}>
                <Container maxWidth="lg">
                    <Navbar path={path} />
                    {/* <Container sx={{ px: { xs: 1, md: 6 } }}> */}
                    <Container disableGutters>
                        <main>{children}</main>
                    </Container>
                    <Footer />
                </Container >
            </ThemeProvider>
        </>
    );
}

