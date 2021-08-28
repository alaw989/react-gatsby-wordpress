import React from "react"
import PortfolioLayout from "../components/layout-portfolio"
import { SectionPortfolio } from "../styles/components/_section-portfolio.js"
// import SEO from "../components/seo"
import { Container, Row, Col } from "react-bootstrap"
import { Link, useStaticQuery } from "gatsby"
import { graphql } from "gatsby"
import parse from "html-react-parser"
import BackgroundImage from "gatsby-background-image"

const IndexPage = props => {
  const { content, title } = props.pageContext

  const data = useStaticQuery(graphql`
    {
      allWordpressAcfOptions {
        nodes {
          options {
            portfolio_section {
              industrial {
                industrial_download_link {
                  url {
                    localFile {
                      url
                    }
                  }
                }
                industrial_pdf_image {
                  sizes {
                    large {
                      localFile {
                        childImageSharp {
                          fluid {
                            base64
                            tracedSVG
                            srcWebp
                            srcSetWebp
                            originalImg
                            originalName
                          }
                        }
                      }
                    }
                  }
                }
                industrial_title
              }
              bridges {
                bridges_download_link {
                  url {
                    localFile {
                      url
                    }
                  }
                }
                bridges_pdf_image {
                  localFile {
                    childImageSharp {
                      fluid {
                        base64
                        tracedSVG
                        srcWebp
                        srcSetWebp
                        originalImg
                        originalName
                      }
                    }
                  }
                }
                bridges_title
              }
              commercial {
                commercial_download_link {
                  url {
                    localFile {
                      url
                    }
                  }
                }
                commercial_title
                commercial_pdf_image {
                  localFile {
                    childImageSharp {
                      fluid {
                        base64
                        tracedSVG
                        srcWebp
                        srcSetWebp
                        originalImg
                        originalName
                      }
                    }
                  }
                }
              }
              misc {
                misc_download_link {
                  url {
                    localFile {
                      url
                    }
                  }
                }
                misc_pdf_image {
                  localFile {
                    childImageSharp {
                      fluid {
                        base64
                        tracedSVG
                        srcWebp
                        srcSetWebp
                        originalImg
                        originalName
                      }
                    }
                  }
                }
                misc_title
              }
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
  const industry = portfolioData.industry

  console.log(portfolioData.misc[0])

  return (
    <PortfolioLayout>
      <Container fluid>
        <Row className="justify-content-center">
          <Col xs={10}>
            <SectionPortfolio>{parse(content)}</SectionPortfolio>
            <Row>
              <Col xs={12} lg={2}>
                <div className="nav-container">
                  <ul className="nav">
                    <li key="0">Misc</li>
                    <li key="1">Commercial</li>
                    <li key="3">Bridges</li>
                    <li key="4">Industrial</li>
                  </ul>
                </div>
              </Col>
              <Col xs={12} lg={10}>
                <div className="pdf-container">
                  {portfolioData.misc.map(item => (
                                    <BackgroundImage
                                    Tag="section"
                                    className="pdf-image"
                                    fluid={item.misc_pdf_image.localFile.childImageSharp.fluid}
                                    backgroundColor={`#040e18`}
                                  ></BackgroundImage>

                  ))}
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </PortfolioLayout>
  )
}

export default IndexPage
