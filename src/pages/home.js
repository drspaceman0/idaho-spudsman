import * as React from "react";
import { useState, useEffect } from "react";
import { graphql } from "gatsby";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Layout from "../components/Layout.js";
import Sidebar from "../components/Sidebar.js";
import ArticleCard from "../components/ArticleCard.js";

var Home = ({ articles, prints, path, }) => {

  if (!articles || !articles.length) {
    console.error("Error loading articles")
    return null;
  }

  return (

    <Layout title={"Idaho Spudsman"} description={"Real Fake News For The Fake Real Idahoan"} path={path} >
      <Grid container>
        <Grid item xs={12} sm={8}>
          <Container disableGutters sx={{ pr: { xs: 0, sm: 2, md: 4 } }}>
            <Grid container spacing={3} sx={{ mt: 0 }}>
              {articles.map((post, index) => (
                <ArticleCard key={index} index={index} post={post} xs={12} sm={(index == 0 ? 12 : 6)} />
              ))}
            </Grid>
          </Container>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Sidebar prints={prints} />
        </Grid>
      </Grid>
    </Layout>
  );
};
export default Home; 
