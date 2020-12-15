// import { useStaticQuery, graphql } from "gatsby"
import React from "react"
// import styled from "styled-components"
import { Container, Row, Col } from "react-bootstrap"
import "bootstrap/dist/css/bootstrap.min.css"
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
// import { faPhone } from "@fortawesome/free-solid-svg-icons"

const Footer = () => {
    
  // const data = useStaticQuery(graphql`
  //   query footerQuery {
  //     wordpress {
  //       menus {
  //         nodes {
  //           name
  //           menuItems {
  //             nodes {
  //               label
  //               id
  //               url
  //               path
  //             }
  //           }
  //           id
  //           slug
  //         }
  //       }
  //     }
  //   }
  // `)

  return (
    <div className="section-footer">
      <Container fluid>
        <Row>
          <Col xs={11}>
            <div></div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Footer
