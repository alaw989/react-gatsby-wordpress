import { Link, useStaticQuery, graphql } from "gatsby"
import React from "react"
import styled from "styled-components"
import Image from "../components/image"
import { Container, Row, Col } from "react-bootstrap"
import "bootstrap/dist/css/bootstrap.min.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPhone } from "@fortawesome/free-solid-svg-icons"
import Mmenu from "../components/vendor/mmenu"

const Navigation = styled.div`
.section-navigation {
  /* display: flex; */
  align-items: center;
  background-color: $fff;
  font-family: 'Roboto', sans-serif;
  .logo {
    max-width: 100px;
    max-height: 100px;
    img {
    }
  }
  .navigation-menu {
    display: flex;
    justify-content: center;
    height: 100%; 
    ul {
      display: flex;
      margin: 0;
      height: 100%;
      align-items: center; 
      justify-content: center; 
      li {
        list-style-type: none;
        margin-bottom: 0; 
        margin-left: 5px;
        margin-right: 5px; 
        a {
          color: blue;
          text-decoration: none;
          text-transform: uppercase;
          margin-right: 5px;
          margin-bottom: 0;
          font-weight: 700;
          &:last-child {
            margin-right: 0;
          }
        }
      }
    }
  }
  .right-container {
    position: relative;
    height: 100%;
    display: flex; 
    a.phone-container {
      display: flex;
      justify-content: flex-start;
      height: 100%;
      flex: 1; 
      .phone {
        height: 100%;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        color: white;
        text-decoration: none;
        background-color: #fff;
        color: #BB0000;
        font-size: 1.7em;
      }
    }
    .menu-container {
      position: relative; 
      flex: 1; 
      background-color: #BB0000;
      @media (min-width: 992px) {
        display: none; 
      }
    }
  }
}
`

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

  const tel = "tel:"

  return (
    <Navigation>
      <div className="section-navigation">
        <Container fluid>
          <Row>
            <Col xs={3}>
              {" "}
              <div className="logo">
                <Image />
              </div>
            </Col>
            <Col xs={6} className="">
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
            <Col xs={3} className="p-0">
              <div className="right-container">
                <a className="phone-container" href={tel + data.allThemeOptions.nodes[0].phone_number}>
                  <div className="phone">
                    <FontAwesomeIcon icon={faPhone} />
                  </div>
                </a>
                <div className="menu-container">
                  <Mmenu />
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
