import { useStaticQuery, graphql } from "gatsby"
import React, { useRef } from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import { ServicesContainer } from "../styles/components/_services.js"
import { Container, Row, Col } from "react-bootstrap"
import Slider from "react-slick"
import Triangle from "../assets/Triangle.svg"
import BackgroundImage from "gatsby-background-image"

const Services = () => {
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

  const title = services.title
  const subtitle = services.subtitle

  const imgs = []

  services.services_repeater.map(x => {
    for (const key in x.service_image) {
      imgs.push(x.service_image[key].childImageSharp.fluid)
    }
  })

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: false,
    arrows: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  }

  return (
    <ServicesContainer>
      <Triangle />
      <Container fluid>
        <Row className="justify-content-center">
          <div className="services-section">
            {/* <h1>{title}</h1>
            <div className="subtitle">{subtitle}</div> */}
            <Slider {...settings}>
              {services.services_repeater.map((x, index) => (
                <div className="service-container">
                  <div className="overlay"></div>
                  <div className="overlay-dark"></div>
                  <div className="industry-plus-icon">
                    <i className="fal fa-plus-circle"></i>
                    <div className="learn-text">Learn More</div>
                  </div>
                  <BackgroundImage
                    fluid={imgs[index]}
                    backgroundColor={`#040e18`}
                    className="service-bg"
                  ></BackgroundImage>
                  <div className="service-title">{x.service_title}</div>
                </div>
              ))}
            </Slider>
          </div>
        </Row>
      </Container>
    </ServicesContainer>
  )
}

export default Services
