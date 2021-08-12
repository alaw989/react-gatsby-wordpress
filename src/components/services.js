import { useStaticQuery, graphql } from "gatsby"
import React from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import { ServicesContainer } from "../styles/components/_services.js"
import { Container, Row } from "react-bootstrap"
import Slider from "react-slick"
import Triangle from "../assets/Triangle.svg"
import ServiceAngle1 from "../assets/service-angle-1.svg"
import ServiceAngle2 from "../assets/service-angle-2.svg"
import ServiceAngle3 from "../assets/service-angle-3.svg"
import BackgroundImage from "gatsby-background-image"
import { FaPlusCircle } from "react-icons/fa"
import { useInView } from "react-intersection-observer"

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

  // const title = services.title
  // const subtitle = services.subtitle

  const imgs = []

  services.services_repeater.map(x => {
    for (const key in x.service_image) {
      imgs.push(x.service_image[key].childImageSharp.fluid)
    }
    return null
  })

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
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

  const { ref, inView, entry } = useInView({
    /* Optional options */
    threshold: 0,
  })

  const view = inView ? "view-on" : "view-off"

  // setServicesView(view)

  return (
    <ServicesContainer>
      {/* <ServiceAngle1 />
      <ServiceAngle2 />
      <ServiceAngle3 /> */}
      <Container fluid>
        <Row className="justify-content-center"></Row>
      </Container>
    </ServicesContainer>
  )
}

export default Services
