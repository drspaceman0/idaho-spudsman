import * as React from "react";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import PrintCard from "./PrintCard.js";
import Divider from '@mui/material/Divider';

const linkStyles = {
  color: '#000',
  fontWeight: '700',
  textDecoration: 'none',

}

function Sidebar({ prints }) {

  if (!prints || !prints.length) return null;

  return (
    <aside id="sidebar">
      <Container disableGutters sx={{ pt: 2 }}>
        {/* popular posts  */}
        <Typography gutterBottom variant="h6" sx={{
          px: 0,
          pt: 0,
          pb: 0,
          borderBottom: 3,
          borderColor: "primary.main",
        }}>
          Popular Posts
        </Typography>
        {
          prints.map((post, index) => (
            <PrintCard key={index} post={post} xs={12} sm={6} />
          ))
        }

        {/* twitter widget lmao */}
        {/* <a className="twitter-timeline"
          href="https://twitter.com/ISpudsman"
          data-chrome="nofooter noborders noheader"
          data-height="300">
          Tweets by @TwitterDev
        </a> */}
        <Divider variant="middle" sx={{ my: 1 }} />
        <Paper elevation={3} sx={{ p: 2, bgcolor: '#f5a063' }}>
          <Typography gutterBottom variant="h6" sx={{ textAlign: 'left', lineHeight: '1.65' }}>
            About Idaho Spudsman
          </Typography>
          <Typography sx={{ textAlign: 'left', lineHeight: '1.65' }} variant="subtitle1">
            Idaho Spudsman is non-affiliated newsletter made by a group of talented satire writers and Eric.
            Have a headline for us? <a href="idahospudsman@gmail.com" style={linkStyles} >Submit here</a>
          </Typography>
        </Paper>
      </Container>
    </aside>
  );
}

export default Sidebar;
