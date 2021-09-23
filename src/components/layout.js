/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { useState, useEffect } from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import SectionHeader from "./section-header"
import Footer from "./footer"
import SectionHero from "./section-hero"
import SectionAboutIntro from "./section-about-intro"
import AboutIntro2 from "./about-intro-2"
import Services from "./services"
import "./layout.css"
import { inViewContext, yOffsetContext } from "../Contexts/siteContext"

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

  const [heroView, setHeroView] = useState()
  const [aboutIntroView, setAboutIntroView] = useState()

  const [offsetY, setOffsetY] = useState(0)
  const handleScroll = () => setOffsetY(window.pageYOffset)

  // useEffect(() => {
  //   if (typeof window !== "undefined") {
  //     window.addEventListener("scroll", handleScroll)
  //   }
  //   return () => window.removeEventListener("scroll", handleScroll)
  // }, [])

  // const [selectedMode, setSelectedMode] = useState()

  return (
    <>
      <inViewContext.Provider
        value={{ heroView, setHeroView, aboutIntroView, setAboutIntroView }}
      >
        <SectionHeader siteTitle={data.site.siteMetadata.title} />
        <yOffsetContext.Provider value={{ offsetY, setOffsetY }}>
          <SectionHero />
        </yOffsetContext.Provider>
        <SectionAboutIntro />
      </inViewContext.Provider>
      <Services />
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
