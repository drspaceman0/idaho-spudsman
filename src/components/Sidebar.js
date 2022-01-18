import * as React from "react";
import { useState } from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import ArticleLinkCard from "../components/ArticleLinkCard.js";




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
    <aside id="sidebar">
      <Container disableGutters sx={{ pt: 2, pl: 2 }}>
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
