import * as React from "react";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";

function ArticleCard(props) {
  const { post, xs, sm } = props;
  const previewWordAmount = 25;

  function previewText(s) {
    if (!s) return "";
    return s.split(" ").slice(0, previewWordAmount).join(" ") + "...";
  }

  function formatDate(timestamp) {
    var d = new Date(timestamp);
    return d.toLocaleDateString("en-US");
  }

  if (!post) {
    return null;
  }

  return (
    <Grid item xs={xs} sm={sm}>
      <Card square sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%', boxShadow: 0, border: "none" }}>
        <CardContent
          sx={{
            px: 0,
            pt: 0,
            pb: 2,
          }}
        >
          <Typography variant="caption">
            {formatDate(post.dateCreated)}
          </Typography>
          <Typography gutterBottom variant="h4" component="div">
            {post.title}
          </Typography>
          <Typography variant="body1">{previewText(post.preview)}</Typography>
        </CardContent>
        <CardMedia
          component="img"
          height="140"
          image={post.image}
          alt=""
          sx={{
            borderTop: 3,
            borderColor: "primary.main",
          }}
        />
      </Card>
    </Grid>
  );
}

export default ArticleCard;
