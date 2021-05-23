// import { useStaticQuery, graphql } from "gatsby"
import React from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import { AboutIntroContainer } from "../styles/components/_about-intro.js"
import Img from "gatsby-image"
import parse from "html-react-parser"
import { PrimaryButton } from "../styles/components/_buttons.js"
import { Link } from "gatsby"
import { useInView } from "react-intersection-observer"

const AboutIntro2 = () => {

  const { ref, inView, entry } = useInView({
    /* Optional options */
    threshold: 0,
  })

  const view = inView ? 'view-on' : 'view-off'

  return (
    <AboutIntroContainer dark>
      <div className="section-about-intro" ref={ref} data-view={view}>
        <div className="content-container">
          <div className="supheading-container">
            <div className="tagline-line first"></div>
            {/* <div className="supheading">Introduction</div> */}
            {/* <div class="tagline-line second"></div> */}
          </div>
          <div className="section-heading view">
       Providing services to corporate industrial contractors, commercial architects and steel fabricators.
          </div>

          {/* <div className="section-content">{parse(paragraph)}</div> */}

          <PrimaryButton light>
            <Link to="/home">
              <div className="overlay"></div>
              <div className="button-text">All Our Projects</div>
            </Link>
          </PrimaryButton>
        </div>
        {/* <div className="intro-image">
          <Triangle className="upper-angle" />
          <div className="skewed-block"></div>
          <Img
            fluid={img}
            backgroundColor={`#040e18`}
            className="intro-bg"
          ></Img>
          <Triangle className="lower-angle" />
        </div> */}
      </div>
    </AboutIntroContainer>
  )
}

export default AboutIntro2
