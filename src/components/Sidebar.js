import * as React from "react";
import { useState, useEffect } from "react";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import ArticleLinkCard from "../components/ArticleLinkCard.js";
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookIcon from '@mui/icons-material/Facebook';



const myArticle = {
  title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
  preview:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  dateCreated: "10/03/2017 07:29:46 -0700",
  image: "https://source.unsplash.com/random",
  imageText: "main image description",
};

const tempArticles = Array(8).fill(myArticle);

function Sidebar(props) {
  const [popularArticles, setPopularArticles] = useState(tempArticles);
  return (
    <>
      <SocialMediaLinks />


      <Typography gutterBottom variant="h6" sx={{
        px: 0,
        pt: 0,
        pb: 0,
        borderBottom: 3,
        borderColor: "primary.main",
      }}>
        Popular Posts
      </Typography>
      {
        popularArticles.map((post, index) => (
          <ArticleLinkCard key={index} post={post} xs={12} sm={6} />
        ))
      }
      <a className="twitter-timeline"
        href="https://twitter.com/ISpudsman"
        data-chrome="nofooter noborders noheader"
        data-height="300">
        Tweets by @TwitterDev
      </a>
    </>
  );
}

function SocialMediaLinks() {
  return (
    <Stack direction="row" spacing={2}>
      <Link
        display="block"
        href="https://twitter.com/ISpudsman"
        sx={{ mb: 0.5 }}
      >
        <TwitterIcon />
      </Link>
      <Link
        display="block"
        href="#"
        sx={{ mb: 0.5 }}
      >
        <FacebookIcon />
      </Link>
      <Link
        display="block"
        href="https://github.com/drspaceman0"
        sx={{ mb: 0.5 }}
      >
        <GitHubIcon />
      </Link>
    </Stack >
  );
}

export default Sidebar;
