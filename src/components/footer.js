import { Link, useStaticQuery, graphql } from "gatsby"
import React from "react"
import { Container, Row, Col } from "react-bootstrap"
import "bootstrap/dist/css/bootstrap.min.css"
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
// import { faPhone } from "@fortawesome/free-solid-svg-icons"
import { FooterContainer } from "../styles/components/_footer.js"
import Img from "gatsby-image"

const Footer = () => {
  const data = useStaticQuery(graphql`
    query footerQuery {
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
            logo_alt {
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
  const phone = data.allWordpressAcfOptions.nodes[0].options.phone_number

  const logo_alt =
  data.allWordpressAcfOptions.nodes[0].options.logo_alt.localFile.childImageSharp
    .fixed

  return (
    <FooterContainer>
      <div className="section-footer">
      <div className="logo">
          {" "}
          <Img fixed={logo_alt} />
        </div>{" "}
        <div className="phone">{phone}</div>
        <div className="nav-menu">
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
        <div className="sub-footer">
          ©2021 VP & Associates. All Rights Reserved.
        </div>
      </div>
    </FooterContainer>
  )
}

export default Footer
