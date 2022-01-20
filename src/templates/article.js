import * as React from "react";
import { graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import Typography from "@mui/material/Typography";
import Layout from "../components/Layout";
import { Container } from "@mui/material";
import { renderRichText } from 'gatsby-source-contentful/rich-text'


export const query = graphql`
query($id: String!) {
    contentfulArticle(id: { eq: $id }) {
    title
    description
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
  `;

export default function ContentfulArticle({ data, location: { pathname }, }) {
    const post = data.contentfulArticle;

    if (!post) {
        return null;
    }
    return (
        <Layout title={post.title} description={post.description} path={pathname}>
            <style>{`
            .first-paragraph>p:first-of-type::first-letter{
                float: left;
                font-size: 4em;
                line-height: .9em;
                padding-top: 2px;
                padding-right: 8px;
            }
            `}</style>
            <Typography variant="h2" sx={{
                py: 2,

            }}>
                {post.title}
            </Typography>
            <GatsbyImage image={post.image.gatsbyImageData} alt={post.title} style={{ borderTop: '3px solid #f17720' }} />
            <br />
            <Typography variant="caption" >
                {post.dateCreated} | By Idaho Spudsman Staff
            </Typography>
            <article>
                <Typography className="first-paragraph" component={'span'} variant="body1" sx={{ pt: 2, }}>
                    {renderRichText(post.text, {})}
                </Typography>
            </article>
        </Layout >

    );
} 