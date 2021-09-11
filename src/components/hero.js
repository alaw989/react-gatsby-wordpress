import { useStaticQuery, graphql } from "gatsby"
import React, { useState, useEffect, useContext, useRef } from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import { HeroContainer } from "../styles/components/_hero.js"
import Slider from "react-slick"
import BackgroundImage from "gatsby-background-image"
import parse from "html-react-parser"
import plus from "../images/plus-icon.png"
import { useInView } from "react-intersection-observer"
import { inViewContext, yOffsetContext } from "../Contexts/siteContext"
import styled from "styled-components"


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

  const [timer, setTimer] = useState(1)
  const [active, setActive] = useState("active")

  useEffect(() => {
    const timerId = setInterval(() => setTimer(timer + 0.005), 100)

    return () => {
      clearInterval(timerId)
    }
  })

  const settings = {
    dots: false,
    infinite: true,
    speed: 3000,
    autoplaySpeed: 6000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    fade: true,
    arrows: false,
    useCSS: true,
    beforeChange: () => {
      setTimer(1)
      if (active == "active") {
        setActive("active2")
      } else {
        setActive("active")
      }
    },
  }

  console.log(active)

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
    <HeroContainer >
      <div className="section-hero" ref={ref}>
        <div
          data-view={view}
          className="hero-title"
          style={{
            transform: `translate(-50%, -${offsetY * 0.5}px)`,
            transition: `.5s all`,
          }}
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
        <div className="progress-bar">
          <div className="progress-inner" data-active={active}></div>
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
                    backgroundSize: `cover`,
                    // transform: `scale(${timer})`,
                    transition: `5s all`,
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
