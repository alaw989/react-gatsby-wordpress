import { useStaticQuery, graphql } from "gatsby"
import React, { Component } from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import { ServicesContainer } from "../styles/components/_services.js"
import { Container, Row, Col } from "react-bootstrap"
import Slider from "react-slick"
import Button from "@material-ui/core/Button"
import BackgroundImage from "gatsby-background-image"
import Astro from "../images/gatsby-astronaut.png"

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
  console.log(services)
  const title = services.title
  const subtitle = services.subtitle

  services.services_repeater.map(x => {
    console.log(x)
  })

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    dots: false,
  }

  const img = ""

  return (
    <Container fluid>
      <Row className="justify-content-center">
        <ServicesContainer>
          <div>
            <h1>{title}</h1>
            <div className="subtitle">{subtitle}</div>
            <Slider {...settings}>
              {services.services_repeater.map(x => (
                <div className="service-container">
                  <div>{x.service_title}</div>
                </div>
              ))}
            </Slider>
          </div>
        </ServicesContainer>
      </Row>
    </Container>
  )
}

export default Services
