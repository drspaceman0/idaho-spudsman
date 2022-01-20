import * as React from "react";
import { graphql } from "gatsby";
import { renderRichText } from 'gatsby-source-contentful/rich-text'
import Home from "./home";


function formatData(d) {
  return (d.edges).map((d) => {
    return {
      title: d.node.title,
      textPreview: d.node.description,
      dateCreated: d.node.dateCreated,
      image: d.node.image,
      imageText: d.node.title,
      slug: `/post/${d.node.slug}`,
    };
  });
}

export default function IndexPage({ data, location: { pathname } }) {
  const articles = formatData(data.articles);
  const prints = formatData(data.prints);

  console.log(articles)
  console.log(prints)

  return (
    <>
      <Home articles={articles} prints={prints} path={pathname} />
    </>
  );
};

export const query = graphql`
{
  articles: allContentfulArticle(
    sort: {fields: dateCreated, order: DESC}
    filter: {tags: {eq: "article"}}
  ) {
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
  prints: allContentfulArticle(
    sort: {fields: dateCreated, order: DESC}
    filter: {tags: {eq: "print"}}
  ) {
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