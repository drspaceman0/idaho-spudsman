import * as React from "react";
import { useState, useEffect } from "react";
// import * as contentful from "contentful"; 
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Navbar from "../components/Navbar.js";
import Sidebar from "../components/Sidebar.js";
import Footer from "../components/Footer.js";
import ArticleCard from "../components/ArticleCard.js";
import FeaturedArticleCard from "../components/FeaturedArticleCard.js";

const myArticle = {
  title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
  preview:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  dateCreated: "10/03/2017 07:29:46 -0700",
  image: "https://source.unsplash.com/random",
  imageText: "main image description",
};

const tempArticles = Array(7).fill(myArticle);

var Home = () => {
  //   const [articles, setArticles] = useState(null);
  const [articles, setArticles] = useState(tempArticles);

  if (!articles) {
    return <h2>Loading website</h2>;
  }

  return (
    <Container maxWidth="lg">
      <Navbar />
      <Container sx={{ px: { xs: 1, md: 6 } }}>
        <Grid container>
          <Grid item xs={12} sm={8}>
            <Container>
              <Grid container spacing={3} sx={{ mt: 0 }}>
                <FeaturedArticleCard post={articles[0]} xs={12} sm={12} />
                {articles.slice(1).map((post, index) => (
                  <ArticleCard key={index} post={post} xs={12} sm={6} />
                ))}
              </Grid>
            </Container>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Sidebar />
          </Grid>
        </Grid>
      </Container>
      <Footer />
    </Container >
  );
};
export default Home;
