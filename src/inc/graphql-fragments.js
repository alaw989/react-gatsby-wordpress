import { graphql } from "gatsby"

export const menuFragment = graphql`
  fragment wordpress__wp_api_menus_menus_itemsConnectionFragment on wordpress__wp_api_menus_menus_itemsConnection {
    edges {
      node {
        items {
          object_slug
          url
          title
        }
      }
    }
  }
`

export const portfolioFragment = graphql`
  fragment wordpress__acf_optionsOptionsPortfolio_sectionFragment on wordpress__acf_optionsOptionsPortfolio_section {
    industrial {
      industrial_pdf_image {
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
      industrial_title
      industrial_download_link {
        url {
          localFile {
            url
          }
        }
      }
    }
    bridges {
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
      bridges_download_link {
        url {
          localFile {
            url
          }
        }
      }
    }
    commercial {
      commercial_download_link {
        url {
          localFile {
            url
          }
        }
      }
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
      commercial_title
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
`
