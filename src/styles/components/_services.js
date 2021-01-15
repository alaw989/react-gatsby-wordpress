import styled from "styled-components"
import { device } from "../mixins"
import BackgroundImage from "gatsby-background-image"

export const ServicesContainer = styled.div`
  overflow: hidden;

  .slick-slider {
    position: relative;
    &.slick-initialized {
      overflow: hidden;
    }
    .service-container {
      height: 25vh;
      padding: 80px;
      color: white; 
      background-color: blue;
      border: .1rem solid white; 
    }
    button {
      position: absolute;
    }
  }
`
