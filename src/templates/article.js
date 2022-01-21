import * as React from "react";
import { graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import Typography from "@mui/material/Typography";
import Layout from "../components/Layout";
import { Box } from "@mui/material";
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
        gatsbyImageData(
            layout: FULL_WIDTH
            placeholder: DOMINANT_COLOR
        )
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
    const isHeadlineOnly = (!post.text);
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
            <article >
                <Box sx={{ mx: "auto", maxWidth: 820 }}>
                    <Typography variant="h2" sx={{
                        py: 2,

                    }}>
                        {post.title}
                    </Typography>
                    <GatsbyImage image={post.image.gatsbyImageData} aspectRatio={16 / 9} alt={post.title} layout="fullWidth" style={{ borderTop: '6px solid #f17720' }} />
                    <br />
                    <Typography variant="caption" >
                        {post.dateCreated} | By Idaho Spudsman Staff
                    </Typography>
                    {isHeadlineOnly ? headlineOnlyMessage() : articleText(renderRichText(post.text, {}))}
                </Box>
            </article>
        </Layout >
    );
}

function articleText(text) {
    return (
        <Container disableGutters sx={{ mt: 2, }}>
            <Typography className="first-paragraph" component={'span'} variant="body1" sx={{ pt: 2, }}>
                {text}
            </Typography>
        </Container>
    );
}

const headlineOnlyMessageStyle = {
    backgroundColor: '#f17720',
    opacity: '0.7',
    width: '100%',
    textAlign: 'center',
    padding: '12px 10px',
    color: '#fff',
    marginTop: 2

};
function headlineOnlyMessage() {
    return (
        <Container disableGutters sx={headlineOnlyMessageStyle}>
            <Typography className="first-paragraph" variant="h3" color="#fff">
                Welcome to the Idaho Spudsman Print Edition! The headline is the whole joke.
            </Typography>
        </Container>
    );
}