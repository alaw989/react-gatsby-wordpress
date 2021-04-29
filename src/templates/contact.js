import React from "react"
import ContactLayout from "../components/contactlayout"
import SEO from "../components/seo"
import { Container, Row, Form, Button, Col } from "react-bootstrap"
import { SectionContact } from "../styles/components/_section-contact.js"
import { FaMobileAlt } from "react-icons/fa"
import { FaEnvelope } from "react-icons/fa"

const IndexPage = props => {
  // const { content, title } = props.pageContext
  const { content } = props.pageContext

  return (
    <ContactLayout>
      <SEO title="Home" />
      <SectionContact>
        <Container>
          <Row>
            <Col xs={{ span: 12, order: 2 }} lg={{ span: 6, order: 1 }}>
              <div className="form-container">
                <div className="form-heading">
                  Please fill out the form below and we will contact you
                  shortly.
                </div>
                <Form>
                  <Form.Group controlId="formBasicName">
                    <Form.Control type="text" placeholder="Name" />
                    <Form.Text className="text-muted"></Form.Text>
                  </Form.Group>

                  <Form.Group controlId="formBasicEmail">
                    <Form.Control type="email" placeholder="Email" />
                  </Form.Group>

                  <Form.Group controlId="formBasicPhone">
                    <Form.Control type="tel" placeholder="Phone" />
                  </Form.Group>

                  <Form.Group controlId="exampleForm.ControlTextarea1">
                    <Form.Control as="textarea" rows={3} placeholder="Questions/Comments" />
                  </Form.Group>

                  <Button variant="primary" type="submit">
                    Submit
                  </Button>
                </Form>
              </div>
            </Col>
            <Col xs={{ span: 12, order: 1 }} lg={{ span: 6, order: 2 }}>
              <div className="contact-container">
                <h2 className="title">
                  Contact <span>VP & Associates</span>
                </h2>
                <div className="contact-info">
                  <div className="phone">
                    {" "}
                    <FaMobileAlt />
                    <a href="tel:813.247.3835">813.247.3835</a>
                  </div>
                  <div className="email">
                    {" "}
                    <FaEnvelope />
                    <a href="mailto:vphan@vp-associates.com">
                      vphan@vp-associates.com{" "}
                    </a>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </SectionContact>
    </ContactLayout>
  )
}

export default IndexPage
