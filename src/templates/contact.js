import React from "react"
import ContactLayout from "../components/layout-contact"
import SEO from "../components/seo"
import { Container, Row, Form, Col } from "react-bootstrap"
import { SectionContact } from "../styles/components/_section-contact.js"
import { Link } from "gatsby"
import { PrimaryButton } from "../styles/components/_buttons.js"
import { FaPhone, FaEnvelope } from "react-icons/fa"

const IndexPage = props => {
  // const { content, title } = props.pageContext
  // const { content } = props.pageContext

  return (
    <ContactLayout>
      <SectionContact>
        <SEO title="Contact Us" />
        <Container fluid>
          <Row className="justify-content-center">
            <Col xs={10}>
              <Row>
                <Col
                  xs={12}
                  lg={6}
                  xs={{ span: 12, order: 2 }}
                  lg={{ order: 1 }}
                >
                  <div className="form-container">
                    <h2 className="title">
                      Contact <span>VP & Associates</span>
                    </h2>
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

                      <PrimaryButton light>
                        <Link to="/home">
                          <div className="overlay"></div>
                          <div className="button-text">Contact Us</div>
                        </Link>
                      </PrimaryButton>
                    </Form>
                  </div>
                </Col>
                <Col
                  xs={12}
                  lg={6}
                  xs={{ span: 12, order: 1 }}
                  lg={{ order: 2 }}
                >
                  <div className="contact-container">
                    <div className="contact-info">
                      <div className="phone">
                        <FaPhone />
                        <Link to="tel:813.247.3835"> 813.247.3835</Link>
                      </div>
                      <div className="email">
                        {" "}
                        <FaEnvelope />
                        <Link to="mailto:vphan@vp-associates.com">
                          vphan@vp-associates.com{" "}
                        </Link>
                      </div>
                    </div>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </SectionContact>
    </ContactLayout>
  )
}

export default IndexPage
