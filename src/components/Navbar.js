import * as React from "react";
import { useState, useEffect } from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Container";

import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

import SearchIcon from "@mui/icons-material/Search";
import MenuIcon from "@mui/icons-material/Menu";

import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookIcon from '@mui/icons-material/Facebook';
import { Link } from "gatsby";

import Logo from "../images//idaho_spudsman_logo.svg";

const pages = [
  { title: "Home", url: "/" },
  { title: "Local", url: "/tag/local" },
  { title: "National", url: "/tag/national" },
  { title: "Sports", url: "/tag/sports" },
];

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

function getTabVal(path) {
  switch (path) {
    case "/":
      return 0;
      break;
    case "/tag/local":
      return 1;
      break;
    case "/tag/national":
      return 2;
      break;
    case "/tag/sports":
      return 3;
      break;
    default:
      return false;
      break;
  }
}

const Navbar = (props) => {
  const [tabVal, setTabVal] = useState(getTabVal(props.path));
  const handleChange = (event, newValue) => {
    setTabVal(newValue);
  };

  return (
    <header>
      <Toolbar
        disableGutters
        sx={{
          p: 2,
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: "0 0 3 0",
          borderBottom: '1px solid #dcdcdc'
        }}
      >
        <Grid container>

          <Grid item xs>
            <IconButton color="primary">
              {/* <MenuIcon /> */}
            </IconButton>
          </Grid>
          <Grid item xs={6} >
            <Link to="/">
              <Container disableGutters sx={{
                p: 0, m: 0, textAlign: 'center',
                transition: 'opacity 0.2s',
                opacity: '1',
                '&:hover': {
                  opacity: '0.7'
                },
              }}>
                <img src={Logo} alt="Idaho Spudsman Logo" />
              </Container>
            </Link>
          </Grid>
          <Grid item xs>
            <Container disableGutters sx={{ justifyContent: "center", alignItems: "center", textAlign: "center" }}>
              <Stack direction="row" spacing={2}   >
                {/* social media links  */}
                {
                  socialMedias.map((item, index) => (
                    <a key={index} href={item.href}  >
                      {item.icon}
                    </a>
                  ))
                }
              </Stack >
            </Container>
          </Grid>
        </Grid>
        <Tabs
          value={tabVal}
          onChange={handleChange}
          textColor="primary"
          indicatorColor="primary"
        >
          {pages.map((page, index) => (
            <Tab key={index} label={page.title} href={page.url} color="#707070"
              sx={{
                '&:hover': {
                  color: "primary.main",
                  opacity: 0.7,
                },
                '&:active': {
                  color: "primary.main",
                  opacity: 1,
                }
              }} />
          ))}
        </Tabs>
      </Toolbar >
    </header>
  );
};

export default Navbar;
