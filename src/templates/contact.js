import React from "react"
import ContactLayout from "../components/contactlayout"
import SEO from "../components/seo"
import { Container, Row, Form, Button, Col } from "react-bootstrap"

const IndexPage = props => {
  // const { content, title } = props.pageContext
  const { content } = props.pageContext

  return (    
    <ContactLayout>
      <SEO title="Home" />
      <Container>
        <Row>
          <Col>
            <Form>
              <Form.Group controlId="formBasicName">
                <Form.Control type="text" placeholder="Name" />
                <Form.Text className="text-muted">
                </Form.Text>
              </Form.Group>

              <Form.Group controlId="formBasicEmail">
            
                <Form.Control type="email" placeholder="Email" />
              </Form.Group>

              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </Col>
          <Col>
            <h2>Company Info</h2>
            <article dangerouslySetInnerHTML={{ __html: content }} />
          </Col>
        </Row>
      </Container>
    </ContactLayout>
  )
}

export default IndexPage
