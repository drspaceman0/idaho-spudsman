import * as React from "react";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import { Link as GatsbyLink } from "gatsby";


function PrintCards(props) {
    const { post, xs, sm } = props;
    if (!post) {
        return null;
    }
    return (
        <Box sx={{
            py: 1,
            '&:hover .title': {
                textDecoration: 'underline'
            },
        }}>
            <Link to={post.slug} component={GatsbyLink} underline="none" >
                <Card square >
                    <Box sx={{ position: 'relative' }}>
                        <CardMedia
                            component="img"
                            sx={{ maxWidth: 280, maxHeight: 145 }}
                            image={post.image.gatsbyImageData.images.fallback.src}
                        />
                        <Box
                            sx={{
                                position: 'absolute',
                                bottom: 0,
                                left: 0,
                                width: '100%',
                                bgcolor: 'rgba(0, 0, 0, 0.54)',
                                color: 'white',
                                padding: '10px',
                            }}
                        >
                            <Typography className="title" variant="subtitle2" color="white">{post.title}</Typography>
                        </Box>
                    </Box>
                </Card>
            </Link>
        </Box>
    );
}

export default PrintCards;
