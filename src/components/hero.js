import { Link, useStaticQuery, graphql } from "gatsby"
import React from "react"
import { Container, Row, Col } from "react-bootstrap"
import "bootstrap/dist/css/bootstrap.min.css"
import Img from "gatsby-image"
import { HeroContainer } from "../styles/components/_hero.js"
import Slider from "react-slick"

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
                    fluid {
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
  //   console.log(slide.map(x => {
  //       console.log(x.slide.localFile.childImageSharp.fixed)
  //   }))

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
      <Slider {...settings}>
        {slide.map(slide => {
          const slideImage = slide.slide.localFile.childImageSharp.fluid
          console.log(slideImage)
          {
            return <Img fixed={slideImage} />
          }
        })}
      </Slider>
      </HeroContainer>

    </div>
  )
}

export default Hero
