import { Link, useStaticQuery, graphql } from "gatsby"
import React from "react"
import Img from "gatsby-image"
import "bootstrap/dist/css/bootstrap.min.css"
import { FooterContainer } from "../styles/components/_footer.js"

const Footer = () => {
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

  console.log(  data.allWordpressAcfOptions.nodes[0].options);

  const menuItems = data.allWordpressWpApiMenusMenusItems.edges[0].node.items
  const logo =
    data.allWordpressAcfOptions.nodes[0].options.logo_dark.localFile
      .childImageSharp.fixed

  const phone = data.allWordpressAcfOptions.nodes[0].options.phone_number

  return (
    <FooterContainer>
      <div className="section-footer">
        <div className="logo">
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
        </div>
      </div>
    </FooterContainer>
  )
}

export default Footer
