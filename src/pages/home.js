import * as React from "react";
import { useState, useEffect } from "react";
import { graphql } from "gatsby";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Layout from "../components/Layout.js";
import Sidebar from "../components/Sidebar.js";
import ArticleCard from "../components/ArticleCard.js";

var Home = ({ articles }) => {

  if (!articles || !articles.length) {
    console.error("Error loading articles")
    return null;
  }

  return (
    <Layout tabVal={0}>
      <Grid container>
        <Grid item xs={12} sm={8}>
          <Container>
            <Grid container spacing={3} sx={{ mt: 0 }}>
              <ArticleCard post={articles[0]} xs={12} sm={12} />
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
    </Layout>
  );
};
export default Home; 
