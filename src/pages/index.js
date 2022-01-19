import * as React from "react";
import { graphql } from "gatsby";
import { renderRichText } from 'gatsby-source-contentful/rich-text'
import Home from "./home";


const previewWordAmount = 25;
function getPreviewOfRichText(rt) {
  const renderedText = renderRichText(rt, {});
  const firstParagraph = renderedText[0].props.children[0];
  const previewText = firstParagraph.split(" ").slice(0, previewWordAmount).join(" ").slice(0, -1) + "...";
  return previewText;
}


export default function IndexPage({ data, location: { pathname } }) {
  const articles = (data.allContentfulArticle.edges).map((d) => {
    return {
      title: d.node.title,
      textPreview: getPreviewOfRichText(d.node.text),
      dateCreated: d.node.dateCreated,
      image: d.node.image.gatsbyImageData.images.fallback.src,
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
  allContentfulArticle(limit: 20, sort: {fields: dateCreated, order: DESC}) {
      edges {
        node {
          title
          slug
          dateCreated(formatString: "DD MMMM, YYYY")
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