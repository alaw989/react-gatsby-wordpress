/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import SectionHeader from "./section-header"
import Footer from "./footer"
import SectionBanner from "./section-banner"
import SectionSegue from "./section-segue"
import "./layout.css"

const Contactlayout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query ContactTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <SectionHeader siteTitle={data.site.siteMetadata.title} />
      <SectionBanner color="dark" />
      {children}
      <SectionSegue />
      <Footer />
    </>
  )
}

Contactlayout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Contactlayout
