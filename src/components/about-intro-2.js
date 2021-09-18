// import { useStaticQuery, graphql } from "gatsby"
import React from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import { AboutIntroContainer } from "../styles/components/_about-intro.js"
// import Img from "gatsby-image"
// import parse from "html-react-parser"
import { PrimaryButton } from "../styles/components/_buttons.js"
import { Link } from "gatsby"
import { useInView } from "react-intersection-observer"
import { Container, Row, Col } from "react-bootstrap"

const AboutIntro2 = scrollPosition => {
  const { ref, inView } = useInView({
    /* Optional options */
    threshold: 0,
  })

  const view = inView ? "view-on" : "view-off"

  return (
    <AboutIntroContainer dark>
      <Container fluid>
        <Row className="justify-content-center">
          <Col xs={10}>
            <div className="section-about-intro" ref={ref} data-view={view}>
              <div className="content-container">
                <div className="supheading-container">
                  <div className="tagline-line first"></div>
                </div>
                <div className="section-heading view">
                  Providing services to corporate industrial contractors,
                  commercial architects and steel fabricators.
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

export default AboutIntro2
