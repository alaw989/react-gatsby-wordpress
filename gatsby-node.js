/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const axios = require('axios');
const path = require("path")

const mediaFields = `
    altText
    uri
`
const seoFields = `
    seo {
        title
        focuskw
        metaDesc
        metaKeywords
        opengraphDescription
        opengraphImage
        opengraphTitle
        twitterDescription
        twitterImage
        twitterTitle
    }
`

const query = `
    query {
      wordpress {
        posts {
          nodes {
            categories {
              nodes {
                name
                slug
                termTaxonomyId
              }
            }
            content
            date
            status
            uri
            title(format: RAW)
          }
        }
        pages {
          nodes {
            uri
            id
            slug
            title
          }
        }
      }
    }
`

exports.sourceNodes = async ({ actions, createNodeId, createContentDigest }) => {
  const { createNode } = actions;


  const fetchThemeOptions = () => axios.get(`http://caring-group.dev14.sociusinc.com/wp-json/acf/v3/options/options/`);
  // await for results
  const res = await fetchThemeOptions();
  // console.log(res.data);

  const nodeContent = JSON.stringify(res.data.acf)

  const nodeMeta = {
    id: createNodeId(`my-data-${res.data.acf.phone_number}`),
    parent: null,
    children: [], 
    internal: {
      type: `ThemeOptions`, 
      mediaType: `text/html`,
      content: nodeContent,
      contentDigest: createContentDigest(res.data.acf)
    }
  }

  const node = Object.assign({}, res.data.acf, nodeMeta)
  createNode(node)

}


exports.createPages = async ({ actions, graphql }) => {
  const { data } = await graphql(
    `
      ${query}
    `
  )

  if (!data) return null

  data.wordpress.pages.nodes.forEach(page => {
    const uri = page.uri == "homepage" ? `` : `/${page.uri}`

    actions.createPage({
      path: uri,
      component: path.resolve(`./src/templates/page.js`),
      context: {
        ...page,
        id: page.id,
        slug: page.uri,
        title: page.title,
      },
    })
  })

  data.wordpress.posts.nodes.forEach(post => {
    actions.createPage({
      path: `/post${post.uri}`,
      component: path.resolve(`./src/templates/post.js`),
      context: {
        ...post,
        id: post.id,
        slug: post.uri,
        title: post.title,
      },
    })
  })
}




