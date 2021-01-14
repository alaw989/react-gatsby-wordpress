import { useStaticQuery, graphql } from "gatsby"
import React, { Component } from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import { ServicesContainer } from "../styles/components/_services.js"
import { Container, Row, Col } from "react-bootstrap"
import Slider from "react-slick"
import Button from "@material-ui/core/Button"
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

  console.log(data.allWordpressAcfOptions.nodes[0].options.services_section)

  const services = data.allWordpressAcfOptions.nodes[0].options.services_section

  const title = services.title
  const subtitle = services.subtitle

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
  }

  return (
    <Container fluid>
      <Row>
        <ServicesContainer>
          <div>
              <h1>{title}</h1>
              <div className="subtitle">{subtitle}</div>
            <Slider {...settings}>
              <div class="service-container">
                <div>Deep Foundation and Shallow Foundation Design</div>
              </div>
              <div class="service-container">
                <div>Seawall Design</div>
              </div>
              <div class="service-container">
                <div>Lowrise and Multi-Story Building</div>
              </div>
              <div class="service-container">
                <div>CAD Drawing</div>
              </div>
              <div class="service-container">
                <div>Steel Connection Design</div>
              </div>
              <div class="service-container">
                <div>Create Lifting Plans</div>
              </div>
              <div class="service-container">
                <div>Inspection Services</div>
              </div>
              <div class="service-container">
                <div>Steel Detailing</div>
              </div>
            </Slider>
          </div>
        </ServicesContainer>
      </Row>
    </Container>
  )
}

export default Services
