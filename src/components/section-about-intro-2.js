// import { useStaticQuery, graphql } from "gatsby"
import React, { useContext, useState } from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import { SectionAboutIntroStyles2 } from "../styles/components/_section-about-intro-2.js"
// import Img from "gatsby-image"
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
console.log(view)
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

  const staggerText = (duration, text) => {
    if (aboutIntroView2) {
      return text.map(item => (
        <FadeIn delay={(duration += 115)}>{item + "\u00a0"}</FadeIn>
      ))
    }
  }

  const showButton = () => {
    if (aboutIntroView2) {
      return (
        <FadeIn delay={1700}>
          <PrimaryButton light>
            <Link to="/home">
              <div className="overlay"></div>
              <div className="button-text">All Our Projects</div>
            </Link>
          </PrimaryButton>
        </FadeIn>
      )
    }
  }
  return (
    <SectionAboutIntroStyles2 dark data-hero-view2={aboutIntroView2}>
      <Container fluid>
        <Row className="justify-content-center">
          <Col xs={10}>
            <div className="section-about-intro" data-view2={view}>
              <div className="content-container">
                <div className="supheading-container">
                  <div className="tagline-line first"></div>
                </div>
                <div className="section-heading view" ref={ref}>
                  {staggerText(durationCount, explodeText)}
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
