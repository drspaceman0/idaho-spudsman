import * as React from "react";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import { Link as GatsbyLink } from "gatsby";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";

function ArticleCard(props) {
  const { post, xs, sm, index } = props;
  const featuredPost = index == 0;

  if (!post) {
    return null;
  }

  return (
    <Grid item xs={xs} sm={sm}>
      <Link to={post.slug} component={GatsbyLink} underline="none">
        <Card className="articleCard" square sx={{
          display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%', boxShadow: 0, border: "none",
          '&:hover div .title': {
            color: "primary.main"
          },
        }}>
          <CardContent
            sx={{ px: 0, pt: 0, pb: 2, }}>
            <Typography variant="caption">
              {post.dateCreated}
            </Typography>
            <Typography className="title" gutterBottom variant={(featuredPost ? "h4" : "h5")} component="div">
              {post.title}
            </Typography>
            <CardMedia
              component="img"
              image={post.image}
              alt=""
              sx={{ borderTop: 3, borderColor: "primary.main", backgroundColor: "primary.main" }} />
            <Typography variant="subtitle1">{post.textPreview}</Typography>
          </CardContent>
        </Card>
      </Link>
    </Grid>
  );
}

export default ArticleCard;
