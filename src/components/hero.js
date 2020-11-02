import { Link, useStaticQuery, graphql } from "gatsby"
import React from "react"
import { Container, Row, Col } from "react-bootstrap"
import "bootstrap/dist/css/bootstrap.min.css"
import Img from "gatsby-image"

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
                    fixed {
                      ...GatsbyImageSharpFixed
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
 
      <Slider {...settings}>
        {slide.map(slide => {
          const slideImage = slide.slide.localFile.childImageSharp.fixed
          console.log(slideImage)
          {
            return <Img fixed={slideImage} />
          }
        })}
      </Slider>
    </div>
  )
}

export default Hero
