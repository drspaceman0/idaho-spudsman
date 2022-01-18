import * as React from "react";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";

function FeaturedArticleCard(props) {
  const { post, xs, sm } = props;
  const previewWordAmount = 25;

  function getPreview(s) {
    return s.split(" ").slice(0, previewWordAmount).join(" ") + "...";
  }

  if (!post) {
    return null;
  }

  return (
    <Grid item xs={xs} sm={sm}>
      <article>
        <Card square sx={{ boxShadow: 0, border: "none" }}>
          <CardContent
            sx={{
              px: 0,
              pt: 0,
              pb: 2,
              borderBottom: 3,
              borderColor: "primary.main",
            }}
          >
            <Typography variant="caption">
              {post.dateCreated}
            </Typography>
            <Typography gutterBottom variant="h2" component="div">
              {post.title}
            </Typography>
          </CardContent>
          <CardMedia
            component="img"
            height="415"
            image="https://source.unsplash.com/random"
            alt=""
          />
          <Typography variant="body2" sx={{ pt: 2 }}>
            {getPreview(post.preview)}
          </Typography>
        </Card>
      </article>
    </Grid>
  );
}

export default FeaturedArticleCard;
