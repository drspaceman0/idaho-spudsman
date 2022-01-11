import * as React from "react";
import { useState } from "react";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import ArticleLinkCard from "../components/ArticleLinkCard.js";
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookIcon from '@mui/icons-material/Facebook';

import Logo from "../images//idaho_spudsman_logo.svg";
import { Link } from "gatsby";


const socialMedias = [
    {
        href: "https://twitter.com/ISpudsman",
        icon: <TwitterIcon />
    },
    {
        href: "#",
        icon: <FacebookIcon />
    },
    {
        href: "https://github.com/drspaceman0",
        icon: <GitHubIcon />
    },
];


function Footer() {
    return (
        <footer>
            <Container sx={{ mt: 2, pt: 2, alignItems: "center", borderTop: '1px solid #dcdcdc' }}>
                <Stack direction="column" spacing="{2}" justifyContent="center" alignItems="center">

                    <Link to="/">
                        <Container disableGutters sx={{
                            p: 0, m: 0,
                            transition: 'opacity 0.2s',
                            opacity: '1',
                            '&:hover': {
                                opacity: '0.7'
                            },
                        }}>
                            <img src={Logo} alt="Idaho Spudsman Logo" />
                        </Container>
                    </Link>
                    <Typography variant="overline" sx={{ fontStyle: 'italic' }}>Idaho's Only News Source</Typography>
                    <Stack direction="row" spacing={2} justifyContent="center"
                        alignItems="center" >
                        {/* social media links  */}
                        {
                            socialMedias.map((item, index) => (
                                <Link
                                    key={index}
                                    display="block"
                                    href={item.href}
                                    sx={{ mb: 0.5 }}
                                >
                                    {item.icon}
                                </Link>
                            ))
                        }
                    </Stack >
                </Stack>
            </Container>
        </footer>
    );
}


export default Footer;
