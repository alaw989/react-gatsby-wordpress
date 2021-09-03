import { useStaticQuery, graphql } from "gatsby"
import React, { useContext } from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import { AboutIntroContainer } from "../styles/components/_about-intro.js"
// import BackgroundImage from "gatsby-background-image"
import Img from "gatsby-image"
import parse from "html-react-parser"
import { PrimaryButton } from "../styles/components/_buttons.js"
import { Link } from "gatsby"
import { useInView } from "react-intersection-observer"
import { Container, Row, Col } from "react-bootstrap"
import { inViewContext } from "../Contexts/inViewContext"

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

  const { ref, inView, entry } = useInView({
    /* Optional options */
    threshold: 0,
  })

  const options =
    data.allWordpressAcfOptions.nodes[0].options.about_intro_section

  const heading = options.heading
  const paragraph = options.paragraph
  // const button = options.button_link
  const img = options.image.localFile.childImageSharp.fluid

  const view = inView ? "view-on" : "view-off"

  const { heroView, setAboutIntroView } = useContext(inViewContext)
  setAboutIntroView(inView)

  const heroShown = heroView ? "in-view" : "not-in-view"

  return (
    <AboutIntroContainer ref={ref} data-hero-view={heroShown}>
      <Container fluid>
        <Row className="justify-content-center">
          <Col xs={10}>
            <div className="section-about-intro" data-view={view}>
              <div className="content-container">
                <div className="supheading-container">
                  <div className="tagline-line first"></div>
                </div>
                <div className="section-heading view">
                  We provide a full range of structural engineering, steel
                  detailing services and inspection services.
                </div>
                <PrimaryButton light>
                  <Link to="/home">
                    <div className="overlay"></div>
                    <div className="button-text">All Our Projects</div>
                  </Link>
                </PrimaryButton>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </AboutIntroContainer>
  )
}

export default AboutIntro
