import {  useStaticQuery, graphql } from "gatsby"
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
            hompage_slider {
              slide {
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

  const slide = data.allWordpressAcfOptions.nodes[0].options.hompage_slider

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
          <Triangle />
          <Slider {...settings}>
            {slide.map(slide => {
              const slideImage = slide.slide.localFile.childImageSharp.fluid
              {
                return (
                  <BackgroundImage
                    fluid={slideImage}
                    backgroundColor={`#040e18`}
                    className="bgSlide"
                  ></BackgroundImage>
                )
              }
            })}
          </Slider>
        </div>
      </HeroContainer>
    </div>
  )
}

export default Hero
