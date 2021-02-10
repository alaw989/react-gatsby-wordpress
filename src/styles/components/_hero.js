import styled from "styled-components"
import { device } from "../mixins"
import { colors } from "../variables"

export const HeroContainer = styled.div`
  .section-hero {
    height: 65vh;
    position: relative;
    font-family: "Roboto Condensed", sans-serif;

    @media ${device.lg} {
      height: 92vh;
    }

    .slick-slide {
      height: 65vh;
      @media ${device.lg} {
          height: 92vh;
        }
      .bgSlide {
        background-attachment: fixed;
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        height: 65vh;
        @media ${device.lg} {
          height: 92vh;
        }
      }
      .bgText {
        color: ${colors.white};
        position: absolute;
        z-index: 99;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        text-transform: uppercase;
        font-size: 2rem;
        font-weight: 700;
        text-align: center;
        line-height: 2rem;
        @media ${device.lg} {
          font-size: 5rem;
          line-height: 5rem;
        }
        &.stroke {
          color: #fff;
          -webkit-text-fill-color: transparent;
          -webkit-text-stroke-width: 1px;
          -webkit-text-stroke-color: #fff;
          @media ${device.lg} {
            -webkit-text-stroke-width: 3px;
          }
        }
      }
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
