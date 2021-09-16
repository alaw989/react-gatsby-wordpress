import { useStaticQuery, graphql } from "gatsby"
import React, { useContext, useState } from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import { AboutIntroContainer } from "../styles/components/_about-intro.js"
// import BackgroundImage from "gatsby-background-image"
import Img from "gatsby-image"
import parse from "html-react-parser"
import { PrimaryButton } from "../styles/components/_buttons.js"
import { Link } from "gatsby"
import { useInView } from "react-intersection-observer"
import { Container, Row, Col } from "react-bootstrap"
import { inViewContext } from "../Contexts/siteContext"
import FadeIn from "react-fade-in"

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
  // const button = options.button_link
  const img = options.image.localFile.childImageSharp.fluid

  const { ref, inView, entry } = useInView({
    /* Optional options */
    threshold: 0,
  })

  const view = inView ? "view-on" : "view-off"
  // console.log("in view", inView)

  const { heroView, setAboutIntroView, aboutIntroView } = useContext(
    inViewContext
  )
  setAboutIntroView(inView)

  const heroShown = heroView ? "in-view" : "not-in-view"

  //animate letters of text individually
  var text =
    "We provide a full range of structural engineering, steel detailing services and inspection services."
  // text = text.trim().split("  ")

  text = text.replaceAll(/ /g, "\u00a0")

  var explodeText = [...text]

  var [durationCount, setDurationCount] = useState(0)

  const staggerText = (duration, text) => {
    if (aboutIntroView == true) {
      return text.map(item => (
        <FadeIn delay={(duration += 15)}>
        
          {item}
        </FadeIn>
      ))
    }
  }

  return (
    <AboutIntroContainer data-hero-view={heroShown}>
      <Container fluid>
        <Row className="justify-content-center">
          <Col xs={10}>
            <div className="section-about-intro" data-view={view}>
              <div className="content-container">
                <div className="supheading-container">
                  <div className="tagline-line first"></div>
                </div>
                <div className="section-heading view" ref={ref}>
                  {staggerText(durationCount, explodeText)}
                </div>
                <FadeIn delay={900}>
                  {" "}
                  <PrimaryButton light>
                    <Link to="/home">
                      <div className="overlay"></div>
                      <div className="button-text">All Our Projects</div>
                    </Link>
                  </PrimaryButton>
                </FadeIn>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </AboutIntroContainer>
  )
}

export default AboutIntro
