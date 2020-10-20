import { Link, useStaticQuery, graphql } from "gatsby"
import React from "react"
import styled from "styled-components"
import Image from "../components/image"
import { Container, Row, Col } from "react-bootstrap"
import "bootstrap/dist/css/bootstrap.min.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPhone } from "@fortawesome/free-solid-svg-icons"
import Mmenu from "../components/vendor/mmenu"

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
      allThemeOptions {
        nodes {
          phone_number
          logo {
            url
          }
        }
      }
    }
  `)

  const Navigation = styled.div`
    .section-navigation {
      /* display: flex; */
      align-items: center;
      background-color: rgba(0, 0, 0, 0.6);
      .logo {
        max-width: 100px;
        max-height: 100px;
        img {
        }
      }
      .navigation-menu {
        display: flex;
        justify-content: center;

        ul {
          display: flex;
          margin: 0;

          li {
            list-style-type: none;
            a {
              color: blue;
              text-decoration: none;
              text-transform: uppercase;
              margin-right: 5px;
              &:last-child {
                margin-right: 0;
              }
            }
          }
        }
      }
      a {
        display: flex;
        justify-content: center;
        height: 100%;
        .phone-wrap {
          height: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          color: white;
          text-decoration: none;
        }
      }
    }
  `



  return (
    <Navigation>
      <div className="section-navigation">
        <Container fluid>
          <Row>
            <Col>
              {" "}
              <div className="logo">
                <Image />
              </div>
            </Col>
            <Col xs={6} className="d-none">
              {" "}
              <div className="navigation-menu">
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
            <Col className="p-0">
              <div classNam="right-container">
                {data.allThemeOptions.nodes[0].phone_number}
                <div className="phone-wrap">
                  <FontAwesomeIcon icon={faPhone} />
                </div>
                  <Mmenu />
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </Navigation>
  )
}

export default Header
