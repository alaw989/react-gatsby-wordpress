import { useStaticQuery, graphql } from "gatsby"
import React from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import { HeroContainer } from "../styles/components/_hero.js"
import Slider from "react-slick"
import BackgroundImage from "gatsby-background-image"
import Triangle from "../assets/Triangle.svg"


const Hero = () => {
  const data = useStaticQuery(graphql`
    query slideQuery {
      allWordpressAcfOptions {
        nodes {
          options {
            homepage {
              hero_image {
                localFile {
                  childImageSharp {
                    fluid(maxWidth: 3080, quality: 100) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  `)

  const slide = data.allWordpressAcfOptions.nodes[0].options.homepage.hero_image.localFile.childImageSharp.fluid
  

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  }

  return (
    <div>
      <HeroContainer>
        <div className="section-hero">
          {/* <div className="hero-text">
            Structural Engineering and Steel Detailing
          </div> */}
          <Triangle />
          <BackgroundImage
            fluid={slide}
            backgroundColor={`#040e18`}
            className="bgSlide"
          ></BackgroundImage>
           <div className="overlay"></div>
        </div>
       
      </HeroContainer>
    </div>
  )
}

export default Hero
