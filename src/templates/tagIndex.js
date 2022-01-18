import * as React from "react";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import ArticleCard from "../components/ArticleCard.js";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";

export const query = graphql`
    query($tag: String!) {
    allContentfulArticle(filter: {tags: {eq: $tag}}) {
        edges {
            node {
                title
                text {
                    raw
                }
                image {
                    gatsbyImageData(placeholder: DOMINANT_COLOR)
                }
                authorName
                dateCreated(formatString: "DD MMMM, YYYY")
                dateModified(formatString: "DD MMMM, YYYY")
                slug
            }
        }
        
    }
  }
`;


function TagIndex({ data }) {
    const articles = (data.allContentfulArticle.edges).map((d) => {
        return {
            title: d.node.title,
            preview: "",
            dateCreated: d.node.dateCreated,
            image: d.node.image.gatsbyImageData.images.fallback.src,
            imageText: d.node.title,
            slug: `/post/${d.node.slug}`,
        }
    });
    return (
        <Layout>
            <Container>
                <Grid container spacing={3} sx={{ mt: 0 }}>
                    {articles.map((post, index) => (
                        <ArticleCard key={index} post={post} xs={12} sm={4} />
                    ))}
                </Grid>
            </Container>

        </Layout >

    );
}
export default TagIndex;