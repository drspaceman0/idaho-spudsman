import * as React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";

function ArticleCard(props) {
    const { post, xs, sm } = props;

    function formatDate(timestamp) {
        var d = new Date(timestamp);
        return d.toLocaleDateString("en-US");
    }

    if (!post) {
        return null;
    }

    return (

        <Card square elevation={0} sx={{ display: 'flex', flexDirection: 'row', pb: 0 }}>
            <CardMedia
                component="img"
                sx={{ height: 50 }}
                image="https://source.unsplash.com/random"
                alt=""
            />
            <CardMedia
                sx={{
                    p: 0,
                    m: 0,
                    borderColor: "primary.main",
                }}
            >
                <Typography gutterBottom variant="subtitle2" sx={{ p: 0, m: 0 }}>
                    {post.title}
                </Typography>
            </CardMedia>

        </Card>
    );
}

export default ArticleCard;
