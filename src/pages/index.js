import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"


const IndexPage = ({ data }) => (

    <Layout>
      <SEO title="Home" />
    </Layout>

)

// export const query = graphql`
//   query MyQuery {
//     wordpress {
//       posts {
//         nodes {
//           title
//         }
//       }
//     }
//   }
// `

export default IndexPage
