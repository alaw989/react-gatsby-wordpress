import React from "react"
// import { Link } from "gatsby"
import InternalLayout from "../components/layout-internal"
import { Container, Row, Col } from "react-bootstrap"
import SEO from "../components/seo"
import parse from "html-react-parser"

const IndexPage = props => {
  const { content, title } = props.pageContext

  return (
    <InternalLayout>
      <SEO title={title} />
      <div id="content" class="site-content">
        <Container Fluid>
          <Row className="justify-content-center">
            <Col xs={12}>
              <h1>{title}</h1>
              {parse(content)}
            </Col>
          </Row>
        </Container>
      </div>
    </InternalLayout>
  )
}

export default IndexPage
