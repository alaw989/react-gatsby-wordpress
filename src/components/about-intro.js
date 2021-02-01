import { useStaticQuery, graphql } from "gatsby"
import React from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import { AboutIntroContainer } from "../styles/components/_about-intro.js"
import { Container, Row, Col } from "react-bootstrap"
import Button from "@material-ui/core/Button"
import BackgroundImage from "gatsby-background-image"
import Triangle from "../assets/Triangle.svg"

const AboutIntro = () => {
  const data = useStaticQuery(graphql`
    query aboutQuery {
      allWordpressAcfOptions {
        nodes {
          options {
            about_intro_section {
              button_link {
                target
                title
                url
              }
              heading
              image {
                localFile {
                  childImageSharp {
                    fluid(maxWidth: 3080, quality: 100) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
              }
              paragraph
            }
          }
        }
      }
    }
  `)

  const options =
    data.allWordpressAcfOptions.nodes[0].options.about_intro_section

  const heading = options.heading
  const paragraph = options.paragraph
  const button = options.button_link
  const img = options.image.localFile.childImageSharp.fluid

  return (
    <AboutIntroContainer>
      <div className="section-about-intro">
        <div className="content-container">
          <div className="section-heading">{heading}</div>
          <div className="section-content">{paragraph}</div>
          {/* <Button variant="contained" color="primary">
                  {button.title}
                </Button> */}
        </div>
        <div className="intro-image">
          <Triangle className="upper-angle" />
          <BackgroundImage
            fluid={img}
            backgroundColor={`#040e18`}
            className="intro-bg"
          ></BackgroundImage>
          <Triangle className="lower-angle" />
        </div>
      </div>

 
    </AboutIntroContainer>
  )
}

export default AboutIntro
