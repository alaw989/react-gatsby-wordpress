import { useStaticQuery, graphql } from "gatsby"
import React from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import { AboutIntroContainer } from "../styles/components/_about-intro.js"
// import BackgroundImage from "gatsby-background-image"
import Img from "gatsby-image"
import parse from "html-react-parser"
import { PrimaryButton } from "../styles/components/_buttons.js"
import { Link } from "gatsby"
import { useInView } from "react-intersection-observer"

const AboutIntro = (scrollPosition) => {

  const data = useStaticQuery(graphql`
    query aboutQuery {
      allWordpressAcfOptions {
        nodes {
          options {
            about_intro_section {
              button_link {
                target
                title
                url
              }
              heading
              image {
                localFile {
                  childImageSharp {
                    fluid(maxWidth: 3080, quality: 100) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
              }
              paragraph
            }
          }
        }
      }
    }
  `)

  const { ref, inView, entry } = useInView({
    /* Optional options */
    threshold: 0,
  })

  const options =
    data.allWordpressAcfOptions.nodes[0].options.about_intro_section

  const heading = options.heading
  const paragraph = options.paragraph
  // const button = options.button_link
  const img = options.image.localFile.childImageSharp.fluid

  const view = inView ? 'view-on' : 'view-off'

  return (
    <AboutIntroContainer position={scrollPosition.scrollPosition}>
      <div className="section-about-intro" ref={ref} data-view={view}>
        <div className="content-container" style={{ transform: `translate(${scrollPosition.scrollPosition * 0.5 - 400}px, 0)` }}>
          <div className="supheading-container">
            <div className="tagline-line first"></div>
            {/* <div className="supheading">Introduction</div> */}
            {/* <div class="tagline-line second"></div> */}
          </div>
          <div className="section-heading view"> 
            We provide a full range of structural engineering, steel detailing
            services and inspection services.
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

export default AboutIntro
