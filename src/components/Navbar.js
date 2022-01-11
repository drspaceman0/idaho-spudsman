import * as React from "react";
import { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Container from "@mui/material/Container";

import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

import SearchIcon from "@mui/icons-material/Search";
import MenuIcon from "@mui/icons-material/Menu";
import Logo from "../images//idaho_spudsman_logo.svg";

const pages = [
  { title: "Home", url: "#" },
  { title: "Local", url: "#" },
  { title: "National", url: "#" },
  { title: "Sports", url: "#" },
];

const Navbar = () => {
  const [value, setValue] = useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
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
        <Container
          disableGutters
          sx={{
            pt: 1,
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",

          }}
        >
          <Box>
            <IconButton color="primary">
              <MenuIcon />
            </IconButton>
          </Box>
          <img src={Logo} alt="Idaho Spudsman Logo" />
          <Box>
            <IconButton color="primary">
              <SearchIcon />
            </IconButton>
          </Box>
        </Container>

        <Tabs
          value={value}
          onChange={handleChange}
          textColor="primary"
          indicatorColor="primary"
        >
          {pages.map((page, index) => (
            <Tab key={index} label={page.title} href={page.url} color="#707070" />
          ))}
        </Tabs>
      </Toolbar >
    </header>
  );
};

export default Navbar;
