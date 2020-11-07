import { useStaticQuery, graphql } from "gatsby"
import React from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import { AboutIntroContainer } from "../styles/components/_about-intro.js"
import { Container, Row, Col } from "react-bootstrap"

const AboutIntro = () => {

    const data = useStaticQuery(graphql`
    query aboutQuery {
      allWordpressWpApiMenusMenusItems {
        edges {
          node {
            items {
              title
              object_slug
            }
          }
        }
      }
      allWordpressAcfOptions {
        nodes {
          options {
            phone_number
            logo {
              localFile {
                childImageSharp {
                  fixed(width: 265, height: 55) {
                    ...GatsbyImageSharpFixed
                  }
                }
              }
            }
          }
        }
      }
    }
  `)

  return (
    <AboutIntroContainer>
      <Container>
        <Row>
          <Col>
            <div>hey</div>
          </Col>
        </Row>
      </Container>
    </AboutIntroContainer>
  )
}

export default AboutIntro
