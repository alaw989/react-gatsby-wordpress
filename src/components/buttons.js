import React from "react"
import { colors } from "../styles/variables.js"
import styled from "styled-components"

const PrimaryButton = ( props ) => {
  return (
    <PrimaryButtonWrapper> 
      <a href={props.url} className="btn btn-primary">
        <div className="overlay"></div>
        <div className="button-text">{props.text}</div>
      </a>
    </PrimaryButtonWrapper>
  )
}

export default PrimaryButton

export const PrimaryButtonWrapper = styled.div`
  position: relative;
  overflow: hidden;
  a {
    background-color: ${colors.white} !important;
    border-radius: 0;
    border: ${props =>
      props.border ? "1px solid red" : "none"};
    position: relative;
    padding: 10px 20px 10px 20px;

    .overlay {
      width: 100%;
      height: 100%;
      cursor: pointer;
      background-color: ${colors.secondary};
      position: absolute;
      top: 0;
      left: 0;
      transition: 0.5s all;
      z-index: 2;
    }

    .button-text {
      position: relative;
      z-index: 3;
      transition: 0.5s all;
      text-transform: uppercase;
      font-size: 14px;
    }

    &:hover {
      .overlay {
        top: -50px;
      }

      .button-text {
        color: ${colors.secondary};
      }
    }
  }
`
