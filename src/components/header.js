import { Link, useStaticQuery, graphql } from "gatsby"
import React from "react"
import { Container, Row, Col } from "react-bootstrap"
import "bootstrap/dist/css/bootstrap.min.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPhone } from "@fortawesome/free-solid-svg-icons"
import Mmenu from "../components/vendor/mmenu"
import { Navigation } from "../styles/components/_header.js"
import Img from "gatsby-image"

const Header = () => {
  const data = useStaticQuery(graphql`
    query newQuery {
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
                  fluid {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
          }
        }
      }
    }
  `)

  const tel = "tel:"

  const logo = data.allWordpressAcfOptions.nodes[0].options.logo.localFile.childImageSharp.fluid
  const menuItems = data.allWordpressWpApiMenusMenusItems.edges[0].node.items
  const phone = data.allWordpressAcfOptions.nodes[0].options.phone_number

  return (
    <Navigation>
      <div className="section-navigation">
        <Container fluid>
          <Row>
            <Col xs={3}>
              {" "}
              <div className="logo"><Img fixed={logo} /></div>
            </Col>
            <Col xs={6} lg={5} className="">
              {" "}
              <div className="navigation-menu d-none d-lg-block">
                <ul>
                  {menuItems.map(x => {
                    const uri = `/${x.object_slug}`
                    return (
                      <li key={x.wordpress_id}>
                        <Link key={x.wordpress_id} to={uri}>
                          {x.title}
                        </Link>
                      </li>
                    )
                  })}
                </ul>
              </div>
            </Col>
            <Col xs={3} lg={4} className="p-0">
              <div className="right-container">
                <a
                  className="phone-container"
                  href={tel + phone}
                >
                  <div className="phone">
                    <FontAwesomeIcon icon={faPhone} />
                    <div className="number">
                      {phone}
                    </div>
                  </div>
                </a>
                <div className="menu-container">
                  <Mmenu />
                  <a href="/contact">
                    <div className="contact-text">Contact Us</div>
                  </a>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </Navigation>
  )
}

export default Header
