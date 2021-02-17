import React from "react"
import { Link } from "gatsby"

import ContactLayout from "../components/contactlayout"
import SEO from "../components/seo"
import { Container, Row, Form, Button, Col } from "react-bootstrap"

const IndexPage = props => {
  const { content, title } = props.pageContext

  return (
    <ContactLayout>
      <SEO title="Home" />
      <Container>
        <Row>
          <Col>
            <Form>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>

              <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>
              <Form.Group controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
              </Form.Group>
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </Col>
          <Col>
            <h1>{title}</h1>
            <article dangerouslySetInnerHTML={{ __html: content }} />
          </Col>
        </Row>
      </Container>
    </ContactLayout>
  )
}

export default IndexPage
