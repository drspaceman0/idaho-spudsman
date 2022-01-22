import * as React from "react";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import { Link as GatsbyLink } from "gatsby";


function PrintCards(props) {
    const { post } = props;
    if (!post) {
        return null;
    }
    const cardImage = post.image.gatsbyImageData.images.fallback.src;
    return (
        <Box sx={{
            py: 1,
            '&:hover .title': {
                textDecoration: 'underline'
            },
        }}>
            <Link to={post.slug} component={GatsbyLink} underline="none" >
                <Box className="printCard"
                    sx={{
                        backgroundImage: `url(${cardImage})`,
                        backgroundPosition: 'center',
                        backgroundSize: 'cover',
                        position: 'relative',
                        minHeight: 145,
                    }}>
                    <Box
                        className="textOverlayContainer"
                        sx={{
                            position: 'absolute',
                            bottom: 0,
                            left: 0,
                            width: '100%',
                            bgcolor: 'rgba(0, 0, 0, 0.54)',
                            color: 'white',

                        }}>
                        <Typography className="title" variant="subtitle2" color="white" sx={{ padding: '10px', }}>{post.title}</Typography>
                    </Box>
                </Box>
            </Link>
        </Box>
    );
}

export default PrintCards;
