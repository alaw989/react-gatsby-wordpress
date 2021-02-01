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
import Hero from "./hero"

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
      <Header siteTitle={data.site.siteMetadata.title} />
      <Hero />
      {children}
      <Footer />
    </>
  )
}

Contactlayout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Contactlayout
