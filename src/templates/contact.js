import React from "react"
import { Link } from "gatsby"

import ContactLayout from "../components/contactlayout"
import SEO from "../components/seo"

const IndexPage = props => {
    const {content, title} = props.pageContext
  
    return (
        <ContactLayout>
            <SEO title="Home" /> 
            <h1>{title}</h1>
            <article dangerouslySetInnerHTML={{ __html: content }} />
        </ContactLayout>
    )
}

export default IndexPage 