// import { useStaticQuery, graphql } from "gatsby"
import React from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import { StyleSegue } from "../styles/components/_style-segue.js"
import Triangle from "../assets/Triangle.svg"
import { PrimaryButton } from "../styles/components/_buttons.js"
import { Link } from "gatsby"

const SectionSegue = () => {
  //   const { content } = props.pageContext

  return (
    <StyleSegue dark>
      <div className="section-segue internal">
        <Triangle />
        <div className="container-fluid">
          <div className="row justify-content-center">
            <div className="col-10">
              <div className="cta">
                <div className="text-block">
                  Need a custom quote? Request your custom quote here.{" "}
                </div>
                <PrimaryButton>
                  <Link to="/home">
                    <div className="overlay"></div>
                    <div className="button-text">Request Your Quote</div>
                  </Link>
                </PrimaryButton>
              </div>
            </div>
          </div>
        </div>
      </div>
    </StyleSegue>
  )
}

export default SectionSegue
