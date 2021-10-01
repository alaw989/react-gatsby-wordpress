import { Link, useStaticQuery, graphql } from "gatsby"
import React from "react"
import Img from "gatsby-image"
import "bootstrap/dist/css/bootstrap.min.css"
import { SectionFooterStyles } from "../styles/components/_section-footer.js"
import { Col, Row, Container, Form } from "react-bootstrap"

const SectionFooter = props => {
  const page = props.page

  const data = useStaticQuery(graphql`
    query footerQuery {
      allWordpressWpApiMenusMenusItems {
        ...wordpress__wp_api_menus_menus_itemsConnectionFragment
      }
      allWordpressAcfOptions {
        nodes {
          options {
            phone_number
            logo_dark {
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

  const menuItems = data.allWordpressWpApiMenusMenusItems.edges[0].node.items
  const logo =
    data.allWordpressAcfOptions.nodes[0].options.logo_dark.localFile
      .childImageSharp.fixed

  const phone = data.allWordpressAcfOptions.nodes[0].options.phone_number

  return (
    <SectionFooterStyles page={props.page}>
      <div className="section-footer">
        <Container fluid>
          <Row className="justify-content-center">
            <Col xs={10}>
              <Row className="justify-content-between">
                <Col xs={12}>
                  <div className="touch-container">
                    <h1 className="higher">Get In touch</h1>
                    <h1 className="lower">Let's talk</h1>
                  </div>
                  <div className="contact-link">
                    <Link to={"/contact"}>Contact</Link>
                  </div>
                  <Form>
                    <Form.Group controlId="formBasicEmail">
                      <Form.Control type="email" placeholder="hello@vpassociates.com" />
                    </Form.Group>
                  </Form>
                </Col>
                {/* <Col xs={12}>
                  {" "}
                  <div className="nav-menu">
                    <ul>
                      {menuItems.map((x, index) => {
                        const uri = `/${x.object_slug}`
                        return (
                          <li key={index}>
                            <Link key={x.wordpress_id} to={uri}>
                              {x.title}
                            </Link>
                          </li>
                        )
                      })}
                    </ul>
                  </div>
                </Col> */}
              </Row>
            </Col>
          </Row>
        </Container>
        {/* <div className="logo">
          <Img fixed={logo} />
        </div>
        <div className="phone">{phone}</div>
        <div className="nav-menu">
          <ul>
            {menuItems.map((x, index) => {
              const uri = `/${x.object_slug}`
              return (
                <li key={index}>
                  <Link key={x.wordpress_id} to={uri}>
                    {x.title}
                  </Link>
                </li>
              )
            })}
          </ul>
        </div>
        <div className="sub-footer">
          ©2021 VP & Associates. All Rights Reserved.
        </div> */}
      </div>
    </SectionFooterStyles>
  )
}

export default SectionFooter
