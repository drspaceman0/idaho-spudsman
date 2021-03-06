import * as React from "react";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import ArticleCard from "../components/ArticleCard.js";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";

export const query = graphql`
    query($tag: String!) { 
    allContentfulArticle(
        sort: {fields: dateCreated, order: DESC}
        filter: {tags: {eq: $tag}}
    ) {
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
                slug
            }
        }
        
    }
  }
`;


function TagIndex({ data, path, pageContext: { tag, pages, }, }) {
    const articles = (data.allContentfulArticle.edges).map((d) => {
        return {
            title: d.node.title,
            textPreview: "",
            dateCreated: d.node.dateCreated,
            image: d.node.image,
            imageText: d.node.title,
            slug: `/post/${d.node.slug}`,
        }
    });
    return (
        <Layout title={`Articles Tagged With ${tag}`} description={`Articles Tagged With ${tag}`} path={path}>
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