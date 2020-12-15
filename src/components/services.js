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
    <Container>
      <Row>
        <ServicesContainer>
          <div>
              <h1>{title}</h1>
              <div className="subtitle">{subtitle}</div>
            <Slider {...settings}>
              <div>
                <h3>1</h3>
              </div>
              <div>
                <h3>2</h3>
              </div>
              <div>
                <h3>3</h3>
              </div>
              <div>
                <h3>4</h3>
              </div>
              <div>
                <h3>5</h3>
              </div>
              <div>
                <h3>6</h3>
              </div>
              <div>
                <h3>7</h3>
              </div>
              <div>
                <h3>8</h3>
              </div>
              <div>
                <h3>9</h3>
              </div>
            </Slider>
          </div>
        </ServicesContainer>
      </Row>
    </Container>
  )
}

export default Services
