import styled from "styled-components"
import { device } from "../mixins"

export const HeroContainer = styled.div`
  .section-hero {
    height: 65vh;
    position: relative;

    @media ${device.lg} {
      height: 100vh;
    }

    .bgSlide {
     
      background-attachment: fixed;
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
      height: 100%;

    
    }

    .hero-text {
      position: absolute;
      color: white;
      z-index: 1;
      font-family: "Roboto Condensed", sans-serif;
      text-transform: uppercase;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      text-align: center;
      font-size: 50px;
      font-weight: 700;
      letter-spacing: 4px;
      line-height: 1em;
      @media ${device.lg} {
        font-size: 75px;
        text-align: left;
        left: 387px;
        max-width: 600px;
      }
    }

    svg {
      position: absolute;
      width: 100%;
      bottom: 0;
      left: 0;
      z-index: 1;
    }

    .slick-slider.slick-initialized {
      overflow: hidden;
      height: 65vh;
      @media ${device.lg} {
        height: 100vh;
      }
    }

    .overlay {
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      background-color: rgba(38, 67, 102, 0.8);
    }
  }
`
