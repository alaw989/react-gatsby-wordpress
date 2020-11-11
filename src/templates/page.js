import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = props => {
    const {content, title} = props.pageContext
  
    return (
        <Layout>
            <SEO title="Home" /> 
            <h1>{title}</h1>
           
            <article dangerouslySetInnerHTML={{ __html: content }} />
        
        </Layout>
    )
}

export default IndexPage 