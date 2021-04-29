// import { useStaticQuery, graphql } from "gatsby"
import React from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import { StyleSegue } from "../styles/components/_style-segue.js"
import Triangle from "../assets/Triangle.svg"
import PrimaryButton from "../components/buttons.js"

const SectionSegue = props => {
  //   const { content } = props.pageContext

  return (
    <StyleSegue>
      <div className="section-segue internal">
        <Triangle />
        <div className="container-fluid">
          <div className="row justify-content-center">
            <div className="col-10">
              <div className="cta">
                <div className="text-block">
                  Need a custom quote? Request your custom quote here.{" "}
                </div>
                <PrimaryButton text="Get Custom Quote" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </StyleSegue>
  )
}

export default SectionSegue
