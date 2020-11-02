/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const axios = require("axios")
const path = require("path")
const { createRemoteFileNode } = require(`gatsby-source-filesystem`)

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

// const query = `
//     query {
//       wordpress {
//         posts {
//           nodes {
//             categories {
//               nodes {
//                 name
//                 slug
//                 termTaxonomyId
//               }
//             }
//             content
//             date
//             status
//             uri
//             title(format: RAW)
//           }
//         }
//         pages {
//           nodes {
//             uri
//             id
//             slug
//             title
//             content
//           }
//         }
//       }
//     }
// `

const query = `
query {
  allWordpressPage {
    nodes {
      slug
      id
      title
      content
      link
    }
  }
  allWordpressPost {
    nodes {
      slug
      path
      content
    }
  }
}
`

exports.createPages = async ({ actions, graphql }) => {
  const { data } = await graphql(
    `
      ${query}
    `
  )

  if (!data) return null

  data.allWordpressPage.nodes.forEach(page => {
    
    const uri = `${page.path}` == "home" ? `` : `${page.path}`
   
    actions.createPage({
      path: `/${page.slug}`,
      component: path.resolve(`./src/templates/page.js`),
      context: {
        ...page,
        id: page.id,
        slug: page.slug,
        title: page.title,
        content: page.content,
      },
    })
  })

  // data.allWordpressPost.nodes.forEach(post => {
  //   actions.createPage({
  //     path: `/post${post.path}`,
  //     component: path.resolve(`./src/templates/post.js`),
  //     context: {
  //       ...post,
  //       id: post.id,
  //       slug: post.uri,
  //       title: post.title,
  //     },
  //   })
  // })
}

// exports.sourceNodes = async ({
//   actions,
//   createNodeId,
//   createContentDigest,
// }) => {
//   const { createNode } = actions

//   const fetchThemeOptions = () =>
//     axios.get(
//       `http://caring-group.dev14.sociusinc.com/wp-json/acf/v3/options/options/`
//     )
//   // await for results
//   const res = await fetchThemeOptions()

//   const nodeContent = JSON.stringify(res.data.acf)

//   const nodeMeta = {
//     id: createNodeId(`my-data-${res.data.acf.phone_number}`),
//     parent: "wordpress",
//     children: [],
//     internal: {
//       type: `ThemeOptions`,
//       mediaType: `text/html`,
//       content: nodeContent,
//       contentDigest: createContentDigest(res.data.acf),
//     },
//   }

//   const node = Object.assign({}, res.data.acf, nodeMeta)
//   createNode(node)
// }

exports.onCreateWebpackConfig = ({ getConfig, stage }) => {
  const config = getConfig()
  if (stage.startsWith("develop") && config.resolve) {
    config.resolve.alias = {
      ...config.resolve.alias,
      "react-dom": "@hot-loader/react-dom",
    }
  }
}

// exports.createResolvers = async ({
//   actions,
//   cache,
//   createNodeId,
//   createResolvers,
//   store,
//   reporter,
// }) => {
//   const { createNode } = actions

//   await createResolvers({
//     WORDPRESS_MediaItem: {
//       imageFile: {
//         type: "File",
//         async resolve(source) {
//           let sourceUrl = source.sourceUrl

//           if (source.mediaItemUrl !== undefined) {
//             sourceUrl = source.mediaItemUrl
//           }

//           return await createRemoteFileNode({
//             url: encodeURI(sourceUrl),
//             store,
//             cache,
//             createNode,
//             createNodeId,
//             reporter,
//           })
//         },
//       },
//     },
//   })
// }
