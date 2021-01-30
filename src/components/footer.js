import { Link, useStaticQuery, graphql } from "gatsby"
import React from "react"
import { Container, Row, Col } from "react-bootstrap"
import "bootstrap/dist/css/bootstrap.min.css"
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
// import { faPhone } from "@fortawesome/free-solid-svg-icons"
import { FooterContainer } from "../styles/components/_footer.js"

const Footer = () => {
    
const data = useStaticQuery(graphql`
query footerQuery{
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
}
`)

const menuItems = data.allWordpressWpApiMenusMenusItems.edges[0].node.items

  return (
    <FooterContainer>
    <div className="section-footer">
      <Container fluid>
        <Col xs={12} className="nav-menu">
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
        </Col>
        <Row>
          <Col xs={12}>
            <div className="sub-footer">©2021 VP & Associates. All Rights Reserved.</div>
          </Col>
        </Row>
      </Container>
    </div>
    </FooterContainer>

  )
}

export default Footer
