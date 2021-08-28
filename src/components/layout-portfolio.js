/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Header from "./header"
import Footer from "./footer"
import InternalBanner from "./internalbanner"
import SectionSegue from "./section-segue"
import "./layout.css"

const Portfoliolayout = ({ children }) => {
  
  const data = useStaticQuery(graphql`
    query PortfolioTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
      <InternalBanner color="dark" />
      {children}
      <SectionSegue />
      <Footer />
    </>
  )
}

Portfoliolayout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Portfoliolayout
