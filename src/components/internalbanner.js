import { useStaticQuery, graphql } from "gatsby"
import React from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import { InternalBannerContainer } from "../styles/components/_internalbanner.js"

import BackgroundImage from "gatsby-background-image"
import Triangle from "../assets/Triangle.svg"

const InternalBanner = () => {
//   const data = useStaticQuery(graphql`
//     query slideQuery {
//       allWordpressAcfOptions {
//         nodes {
//           options {
//             homepage {
//               hero_image {
//                 localFile {
//                   childImageSharp {
//                     fluid(maxWidth: 3080, quality: 100) {
//                       ...GatsbyImageSharpFluid
//                     }
//                   }
//                 }
//               }
//               hero_slider {
//                 image {
//                   localFile {
//                     childImageSharp {
//                       fluid(maxWidth: 3080, quality: 100) {
//                         ...GatsbyImageSharpFluid
//                       }
//                     }
//                   }
//                 }
//                 text
//               }
//             }
//           }
//         }
//       }
//     }
//   `)

//   const affix = data.allWordpressAcfOptions.nodes[0].options.homepage
//   const slide = affix.hero_image.localFile.childImageSharp.fluid

//   const home_slider = affix.hero_slider



  return (
    <div>
      <InternalBannerContainer>
        <div className="section-hero internal">
            
        </div>
      </InternalBannerContainer>
    </div>
  )
}

export default InternalBanner
