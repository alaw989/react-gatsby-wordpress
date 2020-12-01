import { useStaticQuery, graphql } from "gatsby"
import React from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import { AboutIntroContainer } from "../styles/components/_about-intro.js"
import { Container, Row, Col } from "react-bootstrap"

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

  const heading = data.allWordpressAcfOptions.nodes[0].options.about_intro_section.heading
  console.log(heading);

  const paragraph = data.allWordpressAcfOptions.nodes[0].options.about_intro_section.paragraph

  return (
    <AboutIntroContainer>
      <Container>
        <Row>
          <Col xs={12}>
            <div className="section-heading">{heading}</div>
            <div className="section-content">{paragraph}</div>
          </Col>
          <Col xs={12}>

          </Col>
        </Row>
      </Container>
    </AboutIntroContainer>
  )
}

export default AboutIntro
