import * as React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import PrintCard from "./PrintCard.js";

function Sidebar({ prints }) {

  if (!prints || !prints.length) return null;

  return (
    <aside id="sidebar">
      <Container disableGutters sx={{ pt: 2, pl: 2 }}>
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
      </Container>
    </aside>
  );
}


export default Sidebar;
