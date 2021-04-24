import React from "react"
import ContactLayout from "../components/contactlayout"
import SEO from "../components/seo"
import { Container, Row, Form, Button, Col } from "react-bootstrap"
import { SectionContact } from "../styles/components/_section-contact.js"

const IndexPage = props => {
  // const { content, title } = props.pageContext
  const { content } = props.pageContext

  return (
    <ContactLayout>
      <SEO title="Home" />
      <Container>
        <Row>
          <Col xs={12} lg={6} xs={{ order: 2 }} lg={{ order: 1 }}>
            <div className="">
              Please fill out the form below and we will contact you shortly.
            </div>
            <Form>
              <Form.Group controlId="formBasicName">
                <Form.Control type="text" placeholder="Name" />
                <Form.Text className="text-muted"></Form.Text>
              </Form.Group>

              <Form.Group controlId="formBasicEmail">
                <Form.Control type="email" placeholder="Email" />
              </Form.Group>

              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </Col>
          <Col xs={12} lg={6} xs={{ order: 1 }} lg={{ order: 2 }}>
            <SectionContact>
              <h2 className="title">
                Contact <span>VP & Associates</span>
              </h2>
              <div className="contact-info">
                <div className="phone">
                  {" "}
                  Phone:<a href="tel:813.247.3835">813.247.3835</a>
                </div>
                <div className="email">
                  {" "}
                  Email:
                  <a href="mailto:vphan@vp-associates.com">
                    vphan@vp-associates.com{" "}
                  </a>
                </div>
              </div>
            </SectionContact>
          </Col>
        </Row>
      </Container>
    </ContactLayout>
  )
}

export default IndexPage
