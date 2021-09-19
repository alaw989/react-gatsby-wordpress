import React from "react"
// import { Link } from "gatsby"
import InternalLayout from "../components/layout-internal"
import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = props => {
    const {content, title} = props.pageContext
  
    return (
        <InternalLayout>
            <SEO title={title} /> 
            <h1>{title}</h1>
            <article dangerouslySetInnerHTML={{ __html: content }} />
        </InternalLayout>
    )
}

export default IndexPage 