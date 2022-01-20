import * as React from "react";
import { graphql } from "gatsby";
import { renderRichText } from 'gatsby-source-contentful/rich-text'
import Home from "./home";

export default function IndexPage({ data, location: { pathname } }) {
  const articles = (data.allContentfulArticle.edges).map((d) => {
    return {
      title: d.node.title,
      textPreview: d.node.description,
      dateCreated: d.node.dateCreated,
      image: d.node.image,
      imageText: d.node.title,
      slug: `/post/${d.node.slug}`,
    };

  });


  return (
    <>
      <Home articles={articles} path={pathname} />
    </>
  );
};

export const query = graphql`
{
  allContentfulArticle(limit: 5, sort: {fields: dateCreated, order: DESC}) {
      edges {
        node {
          title
          slug
          dateCreated(formatString: "DD MMMM, YYYY")
          image {
            gatsbyImageData(placeholder: DOMINANT_COLOR)
        }
          description
        }
      }
    }
}
`;