import * as React from "react";
import { useState } from "react";
import Grid from "@mui/material/Grid";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";

import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

import { Link } from "gatsby";

import Logo from "../images//idaho_spudsman_logo.svg";

const pages = [
  { title: "Home", url: "/" },
  { title: "Local", url: "/tag/local" },
  { title: "National", url: "/tag/national" },
  { title: "Sports", url: "/tag/sports" },
];

function getTabVal(path) {
  switch (path) {
    case "/":
      return 0;
    case "/tag/local":
      return 1;
    case "/tag/national":
      return 2;
    case "/tag/sports":
      return 3;
    default:
      return false;
  }
}

const Navbar = (props) => {
  const [tabVal, setTabVal] = useState(getTabVal(props.path));
  const handleChange = (event, newValue) => {
    setTabVal(newValue);
  };
  const socialMedias = props.socialMedias;

  return (
    <header>
      <Toolbar
        disableGutters
        sx={{
          p: 2,
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Grid container>
          <Grid item xs>
            <IconButton color="primary">
              {/* <MenuIcon /> */}
            </IconButton>
          </Grid>
          <Grid item xs={6} sx={{ textAlign: 'center', }}>
            <Container disableGutters sx={{
              p: 0, m: 0, display: 'flex', justifyContent: 'center',
              transition: 'opacity 0.2s',
              opacity: '1',
              '&:hover': {
                opacity: '0.7'
              },
            }}>
              <Box sx={{ width: 225, height: 69, textAlign: 'center', }}>
                <Link to="/">
                  <img src={Logo} alt="Idaho Spudsman Logo" />
                </Link>
              </Box>
            </Container>
          </Grid>
          <Grid item xs>
            <Container disableGutters sx={{ width: 104, display: { xs: 'none', sm: 'block' } }} >
              <Grid container>
                {/* social media links  */}
                {
                  socialMedias.map((item, index) => (
                    <Grid key={index} item xs={4} style={{ textAlign: 'right' }}>
                      <a href={item.href} >
                        {item.icon}
                      </a>
                    </Grid>
                  ))
                }
                <Grid item xs></Grid>
              </Grid>
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
