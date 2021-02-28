'use strict'

const path = require('path')

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  await new Promise((resolve, reject) => {
    const blogPost = path.resolve('./src/components/BlogPost/index.tsx')
    resolve(
      graphql(
        `
          {
            allContentfulBlogPost {
              edges {
                node {
                  id
                  title
                  slug
                  titleImage {
                    title
                    file {
                      url
                    }
                  }
                  body {
                    raw
                  }
                }
              }
            }
          }
        `
      ).then(result => {
        if (result.errors) {
          console.log(result.errors)
          reject(result.errors)
        }

        const posts = result.data.allContentfulBlogPost.edges
        posts.forEach((post, index) => {
          createPage({
            path: `/blog/${post.node.slug}/`,
            component: blogPost,
            context: {
              ...post.node,
              bodyParsed: JSON.parse(post.node.body.raw),
            },
          })
        })
      })
    )
  })
}
