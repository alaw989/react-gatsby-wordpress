import React from "react"
import { Link } from "gatsby"

import HomeLayout from "../components/layout-home"
import SEO from "../components/seo"

const IndexPage = props => {
  // console.log(props.pageContext.uri);
  const { content, title } = props.pageContext

  return (
    <HomeLayout>
      <SEO title="Home" />
      <h1>{title}</h1>
      <article dangerouslySetInnerHTML={{ __html: content }} />
      <Link to="/">Go To Homepage</Link>
    </HomeLayout>
  )
}

export default IndexPage
