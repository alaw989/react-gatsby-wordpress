import styled from "styled-components"
import { device } from "../mixins"
import BackgroundImage from "gatsby-background-image"

export const ServicesContainer = styled.div`
  margin-top: 100px;
  font-family: "Roboto Condensed", sans-serif;
  height: 50vh;

  @media ${device.md} {
    height: 60vh;
  }

  .services-section {
    width: 100%;
    position: relative;
    .slick-slider {
      position: relative;
      &.slick-initialized {
   
      }
      .service-container {
        position: relative;
        color: white;
        border-right: 0.1rem solid white;
        height: 50vh;

        @media ${device.md} {
          height: 60vh;
        }

        .service-bg {
          position: absolute;
          width: 100%;
          height: 100%;
          top: 0;
          left: 0;
        }

        .service-title {
          position: absolute;
          z-index: 1;
          left: 30px;
          bottom: 20px;
          font-size: 1.5rem;
          font-weight: 700;
          line-height: 1.7rem;
          transition: 0.5s all;
        }
      }
      button {
        position: absolute;
        display: block;
        top: 0px;
        background-color: #fff;
        box-shadow: 0 0 10px 1px rgba(0, 0, 0, 0.1);
        cursor: pointer;
        width: 50px;
        height: 50px;
        z-index: 1;
        &.slick-prev {
          left: 100px;
          &:before {
            color: #000;
          }
        }
        &.slick-next {
          right: 100px;
          &:before {
            color: #000;
          }
        }
      }
    }
  }
`
