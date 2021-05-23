/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { useState, useEffect } from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Header from "./header"
import Footer from "./footer"
import Hero from "./hero"
import AboutIntro from "./about-intro"
import AboutIntro2 from "./about-intro-2"
import Services from "./services"
import "./layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

const [offsetY, setOffsetY] = useState(0)
const handleScroll = () => setOffsetY(window.pageYOffset)

useEffect(() => {
  if (typeof window !== "undefined") {
    window.addEventListener("scroll", handleScroll)
  }
  return () => window.removeEventListener("scroll", handleScroll)
}, [])


  const [selectedMode, setSelectedMode] = useState()

  return (
    <>
      <Header
        siteTitle={data.site.siteMetadata.title}
        selectedMode={selectedMode}
      />
      <Hero setSelectedMode={setSelectedMode} scrollPosition={offsetY} />
      <AboutIntro scrollPosition={offsetY} />
      <Services setServicesView={setSelectedMode} />
      <AboutIntro2 />
      {children}
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
