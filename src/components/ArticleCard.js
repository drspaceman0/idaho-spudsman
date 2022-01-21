import * as React from "react";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import { Link as GatsbyLink } from "gatsby";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { GatsbyImage } from "gatsby-plugin-image";

function ArticleCard(props) {
  const { post, xs, sm, index } = props;
  const featuredPost = index === 0;

  if (!post) {
    return null;
  }

  return (
    <Grid item xs={xs} sm={sm} sx={{ display: 'flex', alignItems: 'flex-start' }}>
      <Link to={post.slug} component={GatsbyLink} underline="none">
        <Box sx={{
          display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%', boxShadow: 0, border: "none",
          '&:hover > .title': {
            color: "primary.main"
          },
        }}>
          <Typography variant="caption">
            {post.dateCreated}
          </Typography>
          <Typography className="title" gutterBottom variant={(featuredPost ? "h4" : "h5")} component="div">
            {post.title}
          </Typography>

          <GatsbyImage image={post.image.gatsbyImageData} alt={post.title} style={{ borderTop: '6px solid #f17720' }} />
          <Typography variant="subtitle1">{post.textPreview}</Typography>
        </Box>
      </Link>
    </Grid >
  );
}

export default ArticleCard;
