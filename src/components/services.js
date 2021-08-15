import { useStaticQuery, graphql } from "gatsby"
import React, { useState, useRef } from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import { ServicesContainer } from "../styles/components/_services.js"
import { Container, Row, Col } from "react-bootstrap"
import Slider from "react-slick"
import { FaPlusCircle } from "react-icons/fa"
import { useInView } from "react-intersection-observer"
import placeholder from "../images/placeholder_image.jpg"
import { PrimaryButton } from "../styles/components/_buttons.js"
import { Link } from "gatsby"
import BackgroundImage from 'gatsby-background-image'

const Services = ({ setServicesView }) => {
  const data = useStaticQuery(graphql`
    query servicesQuery {
      allWordpressAcfOptions {
        nodes {
          options {
            services_section {
              subtitle
              title
              services_repeater {
                service_image {
                  localFile {
                    childImageSharp {
                      fluid(maxWidth: 3080, quality: 100) {
                        ...GatsbyImageSharpFluid
                      }
                    }
                  }
                }
                service_link
                service_title
              }
            }
          }
        }
      }
    }
  `)

  const services = data.allWordpressAcfOptions.nodes[0].options.services_section
  const servicesData = {
    images: [],
    titles: [],
  }



  services.services_repeater.map((item, index) => {
    for (const key in item.service_image) {
      servicesData.images.push(item.service_image[key].childImageSharp.fluid)
    }

    servicesData.titles.push(item.service_title)
    return null
  })

  const settings = {
    dots: false,
    arrows: false,
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  }

  const { ref, inView, entry } = useInView({
    /* Optional options */
    threshold: 0,
  })

  const view = inView ? "view-on" : "view-off"

  // setServicesView(view)

  const customSlider = useRef()

  return (
    <ServicesContainer>
      <div className="section-services">
        <Container fluid>
          <Row className="justify-content-center">
            <Col xs={10}>
              <div className="section-title-container">
                <div className="tagline" />
                <h2 className="section-title">
                  Quality <span>Services</span>
                </h2>
                <div className="tagline" />
              </div>
              <div className="services-selector">
                {servicesData.titles.map((item, index) => (
                  <div className="services-link-container">
                    <div className="services-icon" />
                    <div
                      className="services-link"
                      data-id={index}
                      onClick={() => customSlider.current.slickGoTo(index)}
                    >
                      {item}
                    </div>
                  </div>
                ))}
              </div>
              <Slider {...settings} ref={customSlider}>
                {services.services_repeater.map((item, index) => (
                  <div className="services-information">
              {/* <BackgroundImage
      Tag="section"
      className={services-image}
      fluid={imageData}
      backgroundColor={`#040e18`}
    >
    </BackgroundImage> */}
                    <div className="services-content">
                      <div className="services-subheading">
                        Two-day observation
                      </div>
                      <div className="services-heading">
                        Experts Who Know Your Industry
                      </div>
                      <div className="services-description">
                        During this intensive, two-day process, we will visit
                        your place of business and observe every aspect of your
                        company’s operations. We’ll then discuss what we learned
                        and give you strategies to achieve your business goals.
                      </div>
                      <PrimaryButton light>
                        <Link to="/home">
                          <div className="overlay"></div>
                          <div className="button-text">Contact Us</div>
                        </Link>
                      </PrimaryButton>
                    </div>
                  </div>
                ))}
              </Slider>
            </Col>
          </Row>
        </Container>
      </div>
    </ServicesContainer>
  )
}

export default Services
