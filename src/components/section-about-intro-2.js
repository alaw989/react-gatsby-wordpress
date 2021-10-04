// import { useStaticQuery, graphql } from "gatsby"
import React, { useContext, useState } from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import { SectionAboutIntroStyles2 } from "../styles/components/_section-about-intro-2.js"
import BackgroundImage from "gatsby-background-image"
// import parse from "html-react-parser"
import { PrimaryButton } from "../styles/components/_buttons.js"
import { Link } from "gatsby"
import { useInView } from "react-intersection-observer"
import { Container, Row, Col } from "react-bootstrap"
import { inViewContext } from "../Contexts/siteContext"
import FadeIn from "react-fade-in"

const SectionAboutIntro2 = scrollPosition => {
  const { ref, inView } = useInView({
    /* Optional options */
    threshold: 0,
  })

  const view = inView ? "view-on" : "view-off"

  const {
    heroView,
    setAboutIntroView,
    aboutIntroView,
    aboutIntroView2,
    setAboutIntroView2,
  } = useContext(inViewContext)

  setAboutIntroView2(inView)

  var text =
    "We provide services to corporate industrial contractors, commercial architects and steel fabricators."
  const vtext = text.split(" ")
  // text = text.replaceAll(/ /g, "\u00a0")

  var explodeText = [...vtext]

  var [durationCount, setDurationCount] = useState(0)

  const staggerText = text => {
    var count = 0
    if (!aboutIntroView2) {
      return text.map(item => {
        count += 100
        return (
          <div
            className="one-word"
            style={{
              opacity: 0,
              transition: ".5s opacity",
           
            }}
          >
            {item + "\u00a0"}
          </div>
        )
      })
    } else if (aboutIntroView2) {
      return text.map(item => {
        count += 100
        return (
          <div
            className="one-word fade-in"
            style={{
              opacity: 1,
              transition: ".5s opacity",
              transitionDelay: count + "ms",
            }}
          >
            {item + "\u00a0"}
          </div>
        )
      })
    }
  }

  const showButton = () => {
    if (!aboutIntroView2) {
      return (
        <PrimaryButton light>
          <Link to="/home">
            <div className="overlay"></div>
            <div className="button-text">All Our Projects</div>
          </Link>
        </PrimaryButton>
      )
    }
    if (aboutIntroView2) {
      return (
        <PrimaryButton light fadein>
          <Link to="/home">
            <div className="overlay"></div>
            <div className="button-text">All Our Projects</div>
          </Link>
        </PrimaryButton>
      )
    }
  }
  return (
    <SectionAboutIntroStyles2 dark data-hero-view2={aboutIntroView2}>
      <Container fluid>
        <Row className="justify-content-center">
          <Col xs={10}>
            <div className="section-about-intro" data-view2={view}>
              {/* <BackgroundImage
                  fluid={slide.image.localFile.childImageSharp.fluid}
                  backgroundColor={`#040e18`}
                  className="bgSlide"
                  style={{
                    backgroundPosition: `0px -${offsetY * 0.3}px`,
                    backgroundSize: `cover`,
                  }}
                >
                  {" "}
                </BackgroundImage> */}
              <div className="content-container">
                <div className="section-heading view" ref={ref}>
                  {staggerText(explodeText)}
                </div>
                {showButton()}
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </SectionAboutIntroStyles2>
  )
}

export default SectionAboutIntro2
