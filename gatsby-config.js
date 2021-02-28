'use strict'
const dotenv = require("dotenv");
dotenv.config({path: ".env.development"});

module.exports = {
  siteMetadata: {
    title: 'gatsby-starter-typescript-plus',
    description: 'A starter kit for TypeScript-based Gatsby projects with sensible defaults.',
    keywords: 'gatsbyjs, gatsby, javascript, sample, something',
    siteUrl: 'https://gatsby-starter-typescript-plus.netlify.com',
    author: {
      name: 'Resi Respati',
      url: 'https://twitter.com/resir014',
      email: 'resir014@gmail.com'
    }
  },
  plugins: [
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'content',
        path: `${__dirname}/src/content`
      }
    },
    'gatsby-transformer-json',
    {
      resolve: 'gatsby-plugin-canonical-urls',
      options: {
        siteUrl: 'https://gatsby-starter-typescript-plus.netlify.com'
      }
    },
    'gatsby-plugin-emotion',
    'gatsby-plugin-typescript',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `8wa8mfmne9v1`,
        // Learn about environment variables: https://gatsby.dev/env-vars
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      },
    },
  ]
}
