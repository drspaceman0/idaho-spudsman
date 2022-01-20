import * as React from "react";
import { useState } from "react";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookIcon from '@mui/icons-material/Facebook';

import Logo from "../images//idaho_spudsman_logo.svg";
import { Link } from "gatsby";


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
        href: "https://github.com/drspaceman0",
        icon: <GitHubIcon color="primary" sx={{ transition: 'opacity 0.2s', opacity: '1', '&:hover': { opacity: '0.7' }, }} />
    },
];


function Footer() {
    return (
        <footer>
            <Container sx={{ mt: 2, pt: 2, pb: 2, alignItems: "center", borderTop: '1px solid #dcdcdc' }}>
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
                                <a key={index} href={item.href}  >
                                    {item.icon}
                                </a>
                            ))
                        }
                    </Stack >
                </Stack>
            </Container>
        </footer>
    );
}


export default Footer;
