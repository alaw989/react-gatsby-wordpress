import { useStaticQuery, graphql } from "gatsby"
import React from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import { HeroContainer } from "../styles/components/_hero.js"
import Slider from "react-slick"
import BackgroundImage from "gatsby-background-image"
import Triangle from "../assets/Triangle.svg"
import parse from "html-react-parser"
import BGOverlay from "../assets/BGOverlay.svg"
import { FaPlus } from "react-icons/fa"
import plus from "../images/plus-icon.png"
import { ParallaxProvider } from "react-scroll-parallax"

console.log(plus)

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

  // home_slider.map(slide => {
  //   console.log(slide.text)
  // })

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
  }

  return (
    <HeroContainer>
      <div className="section-hero">
        <div className="bg-overlay">
          <BGOverlay />
        </div>

        {/* <Triangle /> */}
        <div classname="parallax">
          <div className="hero-title">
            <div className="top">
              <div className="v">V</div>
              <div className="icon">
                <img src={plus} alt="plus-icon" />
              </div>
              <div className="P">P</div>
            </div>
            <div className="bottom">Associates</div>
          </div>
        </div>

        <Slider {...settings}>
          {home_slider.map((slide, index) => (
            <div className="slider-container" key={index}>
              {" "}
              <BackgroundImage
                fluid={slide.image.localFile.childImageSharp.fluid}
                backgroundColor={`#040e18`}
                className="bgSlide"
              >
                {" "}
              </BackgroundImage>
              <div className="bgText">{parse(slide.text)}</div>
              <div className="overlay"></div>
            </div>
          ))}
        </Slider>
      </div>
    </HeroContainer>
  )
}

export default Hero
