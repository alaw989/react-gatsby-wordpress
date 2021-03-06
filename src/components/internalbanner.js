// import { useStaticQuery, graphql } from "gatsby"
import React from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import { InternalBannerContainer } from "../styles/components/_internalbanner.js"
import Triangle from "../assets/Triangle.svg"
import { useStaticQuery, graphql } from "gatsby"
import BackgroundImage from "gatsby-background-image"

// import BackgroundImage from "gatsby-background-image"
// import Triangle from "../assets/Triangle.svg"

const InternalBanner = () => {
  const data = useStaticQuery(graphql`
    query internalPageBannerQuery {
      allWordpressPage {
        nodes {
          featured_media {
            localFile {
              childImageSharp {
                fluid(maxWidth: 3080, quality: 100) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          title
        }
      }
    }
  `)

  const title = data.allWordpressPage.nodes[0].title
  const bgImage = data.allWordpressPage.nodes[0].featured_media.localFile.childImageSharp.fluid

  console.log(title);

  return (
    <div>
      <InternalBannerContainer>
        <Triangle />
        <BackgroundImage
          fluid={bgImage}
          backgroundColor={`#040e18`}
          className="bgImage"
        />
        <div className="section-hero internal"></div>
        <div className="overlay"></div>
        <div className="title">{title}</div>
      </InternalBannerContainer>
    </div>
  )
}

export default InternalBanner
