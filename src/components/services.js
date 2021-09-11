import { useStaticQuery, graphql } from "gatsby"
import React, { useRef } from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import { ServicesContainer } from "../styles/components/_services.js"
import { Container, Row, Col } from "react-bootstrap"
import Slider from "react-slick"
// import { FaPlusCircle } from "react-icons/fa"
// import { useInView } from "react-intersection-observer"
// import placeholder from "../images/placeholder_image.jpg"
import { PrimaryButton } from "../styles/components/_buttons.js"
import { Link } from "gatsby"
import BackgroundImage from "gatsby-background-image"
import parse from "html-react-parser"

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
                service_link {
                  url
                  title
                  target
                }
                service_title
                subtitle
                description
              }
            }
          }
        }
      }
    }
  `)

  const fields = data.allWordpressAcfOptions.nodes[0].options

  const services = fields.services_section
  const services_title = fields.services_section.title
    ? fields.services_section.title
    : "Quality Services"

  // Mapping through data to build new useable object
  const servicesData = []
  services.services_repeater.map((item, index) => {
    for (const prop in item.service_image) {
      if (item.service_image.hasOwnProperty(prop)) {
        servicesData.push({
          images: item.service_image[prop].childImageSharp.fluid,
          titles: item.service_title,
          subtitles: item.subtitle,
          links: item.service_link,
          description: item.description,
        })
      }
    }

    return null
  })

  // Slick settings
  const settings = {
    dots: false,
    arrows: false,
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
 
  }

  // const { inView } = useInView({
  //   /* Optional options */
  //   threshold: 0,
  // })

  // const view = inView ? "view-on" : "view-off"

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
                <h2 className="section-title">{parse(services_title)}</h2>
                <div className="tagline" />
              </div>
              <div className="services-selector">
                {servicesData.map((item, index) => (
                  <div className="services-link-container">
                    <div className="services-icon" />
                    <div
                      className="services-link"
                      data-id={index}
                      onClick={() => customSlider.current.slickGoTo(index)}
                    >
                      {item.titles}
                    </div>
                  </div>
                ))}
              </div>
              <Slider {...settings} ref={customSlider}>
                {servicesData.map((item, index) => (
                  <div className="services-information">
                    <BackgroundImage
                      Tag="section"
                      className="services-image"
                      fluid={item.images}
                      backgroundColor={`#040e18`}
                    ></BackgroundImage>
                    <div className="services-content">
                      <div className="services-subheading">{item.titles}</div>
                      <div className="services-heading">
                        {parse(item.subtitles)}
                      </div>
                      <div className="services-description">
                        {parse(item.description)}
                      </div>
                      <PrimaryButton light>
                        <Link to={item.links.url}>
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
