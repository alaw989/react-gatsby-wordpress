import { Link, useStaticQuery, graphql } from "gatsby"
import React from "react"
// import { Container, Row, Col } from "react-bootstrap"
import "bootstrap/dist/css/bootstrap.min.css"
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
// import { faPhone } from "@fortawesome/free-solid-svg-icons"
import Mmenu from "../components/vendor/mmenu"
import { Navigation } from "../styles/components/_header.js"
import Img from "gatsby-image"

const Header = () => {
  const data = useStaticQuery(graphql`
    query newQuery {
      allWordpressWpApiMenusMenusItems {
        ...wordpress__wp_api_menus_menus_itemsConnectionFragment
      }
      allWordpressAcfOptions {
        nodes {
          options {
            phone_number
            logo_alt {
              localFile {
                childImageSharp {
                  fixed(width: 120, height: 85) {
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

  const tel = "tel:"

  const logo =
    data.allWordpressAcfOptions.nodes[0].options.logo_alt.localFile
      .childImageSharp.fixed
  // const menuItems = data.allWordpressWpApiMenusMenusItems.edges[0].node.items
  // const phone = data.allWordpressAcfOptions.nodes[0].options.phone_number

  return (
    <Navigation>
      <div className="section-navigation">
        <div className="container-fluid">
          <div className="nav-container">
            <div className="logo">
              {" "}
              <Link to="/">
                <Img fixed={logo} />
              </Link>
            </div>{" "}
            {/* <div className="navigation-menu d-none d-xl-block">
          <ul>
            {menuItems.map((post, index) => {
              const uri = `/${post.object_slug}`
              return (
                <li key={index}>
                  <Link key={index} to={uri}>
                    {post.title}
                  </Link>
                </li>
              )
            })}
          </ul>
        </div> */}
            <div className="menu-container">
              {/* <a className="phone-container" href={tel + phone}>
            <div className="phone">
              <FontAwesomeIcon icon={faPhone} />
              <div className="number">{phone}</div>
            </div>
          </a> */}
              {/* <div className="menu-container">
            <div className="overlay-shift"></div>
            <div className="contact-text">Contact Us</div>
          </div> */}
              <Mmenu />
            </div>
          </div>
        </div>
      </div>
    </Navigation>
  )
}

export default Header
