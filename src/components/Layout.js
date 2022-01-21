import * as React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Container from "@mui/material/Container";
import { Seo } from '../components/seo.js';

// import SearchIcon from "@mui/icons-material/Search";
// import MenuIcon from "@mui/icons-material/Menu";
import TwitterIcon from '@mui/icons-material/Twitter';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import FacebookIcon from '@mui/icons-material/Facebook';

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
        color: "#000",
        fontFamily: "Noto Sans",
        fontWeightLight: 400,
        fontWeightRegular: 500,
        fontWeightMedium: 600,
        fontWeightBold: 700,
        h2: {
            fontWeight: 700,
            fontSize: "44px",
            color: "#000",
        },
        h3: {
            fontWeight: 700,
            fontSize: "30px",
            color: "#000",
        },
        h4: {
            fontWeight: 700,
            fontSize: "26px",
            color: "#000",
        },
        h5: {
            fontWeight: 600,
            fontSize: "17px",
            color: "#000",
        },
        h6: {
            fontWeight: 600,
            fontSize: "19px",
            color: "#000",
        },
        h7: {
            fontWeight: 500,
            fontSize: "20px",
            letterSpacing: '0.15px',
            color: "#000",
        },
        subtitle1: {
            fontWeight: 500,
            fontSize: "15px",
            color: "#000",
        },
        subtitle2: {
            fontWeight: 700,
            fontSize: "14px",
            lineHeight: "19px",
            color: "#000",
            p: 0,
            b: 0
        },
        caption: {
            fontSize: "12px",
            color: "#000",
        },
        body1: {
            fontWeight: 500,
            fontSize: "17px",
            color: "#000",
        },
        body2: {
            fontWeight: 500,
            fontSize: "15px",
            color: "#000",
        },
    },
});

const socialMedias = [
    {
        href: "https://twitter.com/ISpudsman",
        icon: <TwitterIcon color="primary" sx={{ transition: 'opacity 0.2s', opacity: '1', '&:hover': { opacity: '0.7' }, }} />
    },
    {
        href: "#",
        icon: <FacebookIcon color="primary" sx={{ transition: 'opacity 0.2s', opacity: '1', '&:hover': { opacity: '0.7' }, }} />
    },
    {
        href: "mailto:idahospudsman@gmail.com",
        icon: <MailOutlineIcon color="primary" sx={{ transition: 'opacity 0.2s', opacity: '1', '&:hover': { opacity: '0.7' }, }} />
    },
];


const childrenContainerStyles = {
    borderTop: '1px solid #dcdcdc',
    borderBottom: '1px solid #dcdcdc',
    paddingBottom: '12px',
};

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
                <Container maxWidth="md">
                    <Navbar path={path} socialMedias={socialMedias} />
                    {/* <Container sx={{ px: { xs: 1, md: 6 } }}> */}
                    <Container disableGutters sx={childrenContainerStyles}>
                        <main>{children}</main>
                    </Container>
                    <Footer socialMedias={socialMedias} />
                </Container >
            </ThemeProvider>
        </>
    );
}

