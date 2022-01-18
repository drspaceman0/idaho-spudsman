import * as React from "react";
import { graphql } from "gatsby";

import Home from "./home";

export default function IndexPage({ data }) {


  const articles = (data.allContentfulArticle.edges).map((d) => {
    return {
      title: d.node.title,
      preview: "",
      dateCreated: d.node.dateCreated,
      image: d.node.image.gatsbyImageData.images.fallback.src,
      imageText: d.node.title,
      slug: `/post/${d.node.slug}`,
    };

  });


  return (
    <>
      <Home articles={articles} />
    </>
  );
};

export const query = graphql`
{
  allContentfulArticle(limit: 20, sort: {fields: dateCreated, order: DESC}) {
      edges {
        node {
          title
          slug
          dateCreated
          image {
            gatsbyImageData
          }
          text {
            raw
          }
        }
      }
    }
}
`;