import React, { useRef } from "react"
import PortfolioLayout from "../components/layout-portfolio"
import { SectionPortfolio } from "../styles/components/_section-portfolio.js"
// import SEO from "../components/seo"
import { Container, Row, Col } from "react-bootstrap"
import { Link, useStaticQuery } from "gatsby"
import { graphql } from "gatsby"
import parse from "html-react-parser"
import BackgroundImage from "gatsby-background-image"
import Slider from "react-slick"

const IndexPage = props => {
  const { content, title } = props.pageContext

  const data = useStaticQuery(graphql`
    {
      allWordpressAcfOptions {
        nodes {
          options {
            portfolio_section {
              ...wordpress__acf_optionsOptionsPortfolio_sectionFragment
            }
          }
        }
      }
    }
  `)

  const portfolioData =
    data.allWordpressAcfOptions.nodes[0].options.portfolio_section

  const misc = portfolioData.misc
  const bridges = portfolioData.bridges
  const commercial = portfolioData.commercial
  const industrial = portfolioData.industrial

  // console.log(portfolioData.misc)

  const settings = {
    dots: false,
    arrows: false,
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  }

  const customSlider = useRef()

  return (
    <PortfolioLayout>
      <Container fluid>
        <Row className="justify-content-center">
          <Col xs={10}>
            <SectionPortfolio>
              {parse(content)}
              <Row>
                <Col xs={12} lg={2}>
                  <div className="nav-container">
                    <ul className="nav">
                      <li
                        key="0"
                        onClick={() => customSlider.current.slickGoTo(0)}
                      >
                        Misc
                      </li>
                      <li
                        key="1"
                        onClick={() => customSlider.current.slickGoTo(1)}
                      >
                        Commercial
                      </li>
                      <li
                        key="3"
                        onClick={() => customSlider.current.slickGoTo(2)}
                      >
                        Bridges
                      </li>
                      <li
                        key="4"
                        onClick={() => customSlider.current.slickGoTo(3)}
                      >
                        Industrial
                      </li>
                    </ul>
                  </div>
                </Col>
                <Col xs={12} lg={10}>
                  <div className="pdf-container">
                    <Slider {...settings} ref={customSlider}>
                      <div className="pdf-wrapper">
                        {misc.map(item => (
                          <a
                            href={
                              item.misc_download_link.url.localFile.url
                                ? item.misc_download_link.url.localFile.url
                                : ""
                            }
                            rel="noreferrer"
                            target="_blank"
                          >
                            <div className="misc-pdf-wrapper">
                              <BackgroundImage
                                Tag="section"
                                className="misc-pdf-image"
                                fluid={
                                  item.misc_pdf_image.localFile.childImageSharp
                                    .fluid
                                }
                                backgroundColor={`#040e18`}
                              ></BackgroundImage>
                              <div className="pdf-title">
                                {item.misc_title ? item.misc_title : ""}
                              </div>
                            </div>
                          </a>
                        ))}
                      </div>
                      <div className="pdf-wrapper">
                        {commercial.map(item => (
                          <a
                            href={
                              item.commercial_download_link.url.localFile.url
                                ? item.commercial_download_link.url.localFile
                                    .url
                                : ""
                            }
                            rel="noreferrer"
                            target="_blank"
                          >
                            <div className="commercial-pdf-wrapper">
                              <BackgroundImage
                                Tag="section"
                                className="commercial-pdf-image"
                                fluid={
                                  item.commercial_pdf_image.localFile
                                    .childImageSharp.fluid
                                }
                                backgroundColor={`#040e18`}
                              ></BackgroundImage>
                              <div className="pdf-title">
                                {item.commercial_title
                                  ? item.commercial_title
                                  : ""}
                              </div>
                            </div>
                          </a>
                        ))}
                      </div>
                      <div className="pdf-wrapper">
                        {bridges.map(item => (
                          <a
                            href={
                              item.bridges_download_link.url.localFile.url
                                ? item.bridges_download_link.url.localFile.url
                                : ""
                            }
                            rel="noreferrer"
                            target="_blank"
                          >
                            <div className="bridges-pdf-wrapper">
                              <BackgroundImage
                                Tag="section"
                                className="bridges-pdf-image"
                                fluid={
                                  item.bridges_pdf_image.localFile
                                    .childImageSharp.fluid
                                }
                                backgroundColor={`#040e18`}
                              ></BackgroundImage>
                              <div className="pdf-title">
                                {item.bridges_title ? item.bridges_title : ""}
                              </div>
                            </div>
                          </a>
                        ))}
                      </div>
                      <div className="pdf-wrapper">
                        {industrial.map(item => (
                          <a
                            href={
                              item.industrial_download_link.url.localFile.url
                                ? item.industrial_download_link.url.localFile
                                    .url
                                : ""
                            }
                            rel="noreferrer"
                            target="_blank"
                          >
                            <div className="industrial-pdf-wrapper">
                              <BackgroundImage
                                Tag="section"
                                className="industrial-pdf-image"
                                fluid={
                                  item.industrial_pdf_image.localFile
                                    .childImageSharp.fluid
                                }
                                backgroundColor={`#040e18`}
                              ></BackgroundImage>
                              <div className="pdf-title">
                                {item.industrial_title
                                  ? item.industrial_title
                                  : ""}
                              </div>
                            </div>
                          </a>
                        ))}
                      </div>
                    </Slider>
                  </div>
                </Col>
              </Row>
            </SectionPortfolio>
          </Col>
        </Row>
      </Container>
    </PortfolioLayout>
  )
}

export default IndexPage
