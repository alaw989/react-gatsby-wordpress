import { Link, useStaticQuery, graphql } from "gatsby"
import React from "react"
import Image from "../components/image"
import { Container, Row, Col } from "react-bootstrap"
import "bootstrap/dist/css/bootstrap.min.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPhone } from "@fortawesome/free-solid-svg-icons"
import Mmenu from "../components/vendor/mmenu"
import { Navigation } from "../styles/components/_header.js"

const Header = () => {
  const data = useStaticQuery(graphql`
    query newQuery {
      wordpress {
        menus {
          nodes {
            name
            menuItems {
              nodes {
                label
                id
                url
                path
              }
            }
            id
            slug
          }
        }
      }
      # allThemeOptions {
      #   nodes {
      #     phone_number
      #     logo {
      #       url
      #     }
      #   }
      # }
    }
  `)

  const tel = "tel:"
    console.log(data.allThemeOptions.nodes[0].logo.url)
  return (
    <Navigation>
      <div className="section-navigation">
        <Container fluid>
          <Row>
            <Col xs={3}>
              {" "}
              <div className="logo">
                <img src={data.allThemeOptions.nodes[0].logo.url}></img>
              </div>
            </Col>
            <Col xs={6} lg={5} className="">
              {" "}
              <div className="navigation-menu d-none d-lg-block">
                <ul>
                  {data.wordpress.menus.nodes[0].menuItems.nodes.map(x => {
                    return (
                      <li key={x.id}>
                        <Link key={x.id} to={x.path}>
                          {x.label}
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
                  href={tel + data.allThemeOptions.nodes[0].phone_number}
                >
                  <div className="phone">
                    <FontAwesomeIcon icon={faPhone} />
                    <div className="number">
                      {data.allThemeOptions.nodes[0].phone_number}
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
