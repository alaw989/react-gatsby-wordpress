import { useStaticQuery, graphql } from "gatsby"
import React, { useState, useEffect, useContext, useRef } from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import { HeroContainer } from "../styles/components/_hero.js"
import Slider from "react-slick"
import BackgroundImage from "gatsby-background-image"
import parse from "html-react-parser"
import plus from "../images/plus-icon.png"
import styled from "styled-components"
import { useInView } from "react-intersection-observer"
import { inViewContext, yOffsetContext } from "../Contexts/siteContext"

const Hero = ({}) => {
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
              hero_slider {
                image {
                  localFile {
                    childImageSharp {
                      fluid(maxWidth: 3080, quality: 100) {
                        ...GatsbyImageSharpFluid
                      }
                    }
                  }
                }
                text
              }
            }
          }
        }
      }
    }
  `)

  const affix = data.allWordpressAcfOptions.nodes[0].options.homepage
  // const slide = affix.hero_image.localFile.childImageSharp.fluid
  const home_slider = affix.hero_slider

  var count = 0 

  const settings = {
    dots: false,
    infinite: true,
    speed: 2000,
    autoplaySpeed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    fade: true,
    arrows: false,
    beforeChange: () => {
      // var interval = setInterval(() => {
      //   ++count
      //   console.log(count);
      // }, 100)

      // const interval2 = setInterval(() => {
      //   clearInterval(interval)
      //   count = 0 
    
      // }, 6000)

      const counter = () => {
        if (count < 10) {
          count += 1;
        }
        else if (count == 10) {
          count = 0
        }

        console.log(count)
      }

      const interval = setInterval(counter, 200)
    
    }
  }



  useEffect(() => {
    // var interval = setInterval(() => {
    //   count++
    //   console.log(count)
    // }, 1000)
    //  const interval2 = setInterval(() => {
    //   clearInterval(interval)
    // }, 5000)
    // return () => clearInterval(interval)
  }, [])

 
  const { ref, inView, entry } = useInView({
    /* Optional options */
    threshold: 0,
  })

  const view = inView ? "view-on" : "view-off"

  const { setHeroView } = useContext(inViewContext)
  setHeroView(inView)

  // Page Y Offset State
  const { offsetY } = useContext(yOffsetContext)

  const sliderRef = useRef

  return (
    <HeroContainer>
      <div className="section-hero" ref={ref}>
        <div
          data-view={view}
          className="hero-title"
          style={{ transform: `translate(-50%, -${offsetY * 0.5}px)` }}
        >
          <div className="top">
            <div className="v">V</div>
            <div className="icon">
              <img src={plus} alt="plus-icon" />
            </div>
            <div className="P">P</div>
          </div>
          <div className="bottom">Associates</div>
        </div>

        <Slider {...settings} ref={ref => (sliderRef.current = ref)}>
          {home_slider.map((slide, index) => (
            <div className="slider-container" key={index}>
              <BackgroundImage
                fluid={slide.image.localFile.childImageSharp.fluid}
                backgroundColor={`#040e18`}
                className="bgSlide"
                style={{
                  backgroundPosition: `0px -${offsetY * 0.3}px`,
                  backgroundSize: `${count / 4 + 100}%`,
                  // transform: `scale(${count / 1000})`,
                  // transition: `.5s all`
                }}
              >
                {" "}
              </BackgroundImage>
              <div
                className="bgText" /*style={{ transform: `translate(-50%, -${offsetY * 0.7}px)` }}*/
              >
                {parse(slide.text)}
              </div>
              <div className="overlay"></div>
            </div>
          ))}
        </Slider>
      </div>
    </HeroContainer>
  )
}

export default Hero
