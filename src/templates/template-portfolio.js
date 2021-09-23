import React from "react"
import PortfolioLayout from "../components/layout-portfolio"
import SectionPortfolio from "../components/section-portfolio"
import parse from "html-react-parser"
import { Row, Col, Container } from "react-bootstrap"

const TemplatePortfolio = props => {
  const { content, title } = props.pageContext

  return (
    <PortfolioLayout>
      <div id="content" class="site-content">
        <Container Fluid>
          <Row className="justify-content-center">
            <Col xs={12}>
              {parse(content)}
              <SectionPortfolio />
            </Col>
          </Row>
        </Container>
      </div>
    </PortfolioLayout>
  )
}

export default TemplatePortfolio
