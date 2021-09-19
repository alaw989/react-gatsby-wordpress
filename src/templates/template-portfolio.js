import React from "react"
import PortfolioLayout from "../components/layout-portfolio"
import SectionPortfolio  from "../components/section-portfolio"
import parse from "html-react-parser"



const TemplatePortfolio = props => {
  const { content, title } = props.pageContext

  return (
    <PortfolioLayout>
   {parse(content)}
      <SectionPortfolio />
    </PortfolioLayout>
  )
}

export default TemplatePortfolio
