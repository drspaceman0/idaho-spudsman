require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    siteUrl: "https://www.idahospudsman.com/",
    title: "Idaho Spudsman",
    description: "Real Fake News For The Fake Real Idahoan",
    image: "https://images.ctfassets.net/y5a0adklapc1/5EvHT2CIKaMCn7MgGLuLXu/520b2fe70c570c6d6f07fb4a4b9d1a97/idaho-spudsman.jpg",
  },

  plugins: [
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: `${__dirname}/src/images/`,
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        "icon": "src/images/favicon.png"
      }
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.GATSBY_CONTENTFUL_SPACE_ID,
        accessToken: process.env.GATSBY_CONTENTFUL_ACCESS_TOKEN,
      },
    },
    'gatsby-plugin-image',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    "gatsby-plugin-twitter",
    "gatsby-plugin-netlify",
  ],
};