import * as React from "react";
import Typography from "@mui/material/Typography";
import Layout from "../components/Layout";
import { Container } from "@mui/material";
import { StaticImage } from 'gatsby-plugin-image';



const myArticle = {
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    preview:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    dateCreated: "10/03/2017 07:29:46 -0700",
    image: "https://source.unsplash.com/random",
    imageText: "main image description",
};

function Article(props) {
    let { post, xs, sm } = props;
    post = myArticle;

    function formatDate(timestamp) {
        var d = new Date(timestamp);
        return d.toLocaleDateString("en-US");
    }
    if (!post) {
        return null;
    }


    return (
        <Layout>
            <style>{`
         .first-paragraph::first-letter{
            float: left;
            font-size: 4em;
            line-height: .9em;
            padding-top: 2px;
            padding-right: 8px;
          }
          `}</style>
            <Typography variant="h2" sx={{
                py: 2,
                borderBottom: 3,
                borderColor: "primary.main",
            }}>
                {post.title}
            </Typography>
            <Container disableGutters sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', }}>
                <StaticImage
                    src="https://source.unsplash.com/random"
                    alt=""
                />
            </Container>
            <Typography variant="caption" >
                {formatDate(post.dateCreated)} | By Idaho Spudsman Staff
            </Typography>
            <article>
                <Typography className="first-paragraph" variant="body1" sx={{ pt: 2, }}
                >
                    {post.preview}
                    {post.preview}
                    {post.preview}
                </Typography>
            </article>
        </Layout >

    );
}

export default Article;