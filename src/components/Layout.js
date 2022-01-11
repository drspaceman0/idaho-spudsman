import * as React from "react";
import { Link, useStaticQuery, graphql } from "gatsby";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import Footer from "./Footer";
import { Container, Grid } from "@mui/material";

export default function Layout({
    children,
    title = false,
    description = false,
    image = false,
    path = false,
}) {
    return (
        <>
            <Container maxWidth="lg">
                <Navbar />
                {/* <Link href="pages/article">Go to article</Link> */}
                <Container sx={{ px: { xs: 1, md: 6 } }}>
                    <Grid container>
                        <Grid item xs={12} sm={8}>
                            <Container>
                                {/* content goes in here */}
                                <main>{children}</main>
                            </Container>
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Sidebar />
                        </Grid>
                    </Grid>
                </Container>
                <Footer />
            </Container >


        </>
    );
}