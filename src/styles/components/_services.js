import styled from "styled-components"
import { device } from "../mixins"
import { colors } from "../variables"
// import BackgroundImage from "gatsby-background-image"

export const ServicesContainer = styled.div`
  margin-top: 100px;
  font-family: "Roboto Condensed", sans-serif;
  height: 50vh;
  position: relative;
  @media ${device.md} {
    height: 60vh;
  }

  svg {
    position: absolute;
    z-index: 1;
    transform: rotate(180deg);
    top: -1px;
 
    .cls-1 {
      fill: ${props => props.dark ? colors.primary : colors.white};
    }
  
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
        cursor: pointer;

        &:hover {
          .overlay-dark {
            opacity: 1;
          }
          .service-title {
            opacity: 0;
          }
          .industry-plus-icon {
            opacity: 1;
          }
        }

        @media ${device.md} {
          height: 60vh;
        }

        .overlay {
          position: absolute;
          width: 100%;
          height: 100%;
          top: 0;
          left: 0;
          z-index: 1;
          background-image: linear-gradient(
            0deg,
            rgba(0, 29, 78, 0.85),
            transparent
          );
        }

        .overlay-dark {
          position: absolute;
          width: 100%;
          height: 100%;
          background-color: rgba(0, 29, 78, 0.85);
          -webkit-transition: 0.3s all;
          transition: 0.3s all;
          top: 0;
          left: 0;
          z-index: 1;
          opacity: 0;
        }

        .industry-plus-icon {
          display: flex;
          flex-direction: column;
          align-items: center;

          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          color: #fff;
          opacity: 0;
          z-index: 1;
          transition: 0.5s all;
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
        top: 50%;
        transform: translateY(-50%);
        background-color: #fff;
        box-shadow: 0 0 10px 1px rgba(0, 0, 0, 0.1);
        cursor: pointer;
        width: 50px;
        height: 50px;
        z-index: 1;
        &.slick-prev {
          left: 0px;
          &:before {
            color: #000;
          }
        }
        &.slick-next {
          right: 0px;
          &:before {
            color: #000;
          }
        }
      }
    }
  }
`
