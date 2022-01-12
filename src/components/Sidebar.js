import * as React from "react";
import { useState } from "react";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { Link } from "gatsby";
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

const tempArticles = Array(8).fill(myArticle);



function Sidebar(props) {
  const [popularArticles, setPopularArticles] = useState(tempArticles);
  return (
    <aside id="sidebar">
      <Container disableGutters sx={{ pt: 2, pl: 2 }}>
        <Stack direction="row" spacing={2}>

          {/* social media links  */}
          {
            socialMedias.map((item, index) => (
              <Link
                key={index}
                to={item.href}
                sx={{ mb: 0.5 }}
              >
                {item.icon}
              </Link>
            ))
          }
        </Stack >

        {/* popular posts  */}
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

        {/* twitter widget lmao */}
        <a className="twitter-timeline"
          href="https://twitter.com/ISpudsman"
          data-chrome="nofooter noborders noheader"
          data-height="300">
          Tweets by @TwitterDev
        </a>
      </Container>
    </aside>
  );
}


export default Sidebar;
