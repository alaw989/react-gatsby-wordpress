import React from "react"
import HomeLayout from "../components/layout-home"
import SEO from "../components/seo"


const IndexPage = ({ data }) => (

    <HomeLayout>
      <SEO title="Home" />
    </HomeLayout>

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
