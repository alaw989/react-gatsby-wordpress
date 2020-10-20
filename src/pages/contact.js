import React from "react"

import { graphql } from "gatsby"

import Layout from "../components/layout"

import SEO from "../components/seo"


const Contact = ({ data }) => {

    return  (
   
        <Layout>
          <SEO title="Home" />                                                                                                                                                   
          <h1>Contact Page</h1>
        </Layout>
    
      
      )
}


  export const query = graphql`
    query aQuery {
        wordpress {
            posts {
                nodes {
                    title
                    date
                    slug
                }
            }
        }
    }
  `
  

  
  export default Contact