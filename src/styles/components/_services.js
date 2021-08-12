import styled from "styled-components"
import { device } from "../mixins"
import { colors } from "../variables"
// import BackgroundImage from "gatsby-background-image"

export const ServicesContainer = styled.div`
  font-family: "Roboto Condensed", sans-serif;
  height: 100vh;
  position: relative;
  background-image: url("../assets/service-angle-1.svg");
  @media ${device.md} {
    height: 100vh;
  }

  svg {
    position: absolute;
    z-index: 1;
    transform: rotate(180deg);
    top: -1px;

    .cls-1 {
      fill: ${props => (props.dark ? colors.primary : colors.white)};
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
        height: 100vh;
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
          height: 100vh;
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
          top: 63%;
          left: 50%;
          transform: translate(-50%, -50%);
          color: #fff;
          opacity: 0;
          z-index: 1;
          transition: 0.5s all;
          .learn-text {
            font-size: 1rem;
            text-transform: uppercase;
          }
          svg {
            top: -57px;
            font-size: 3rem;
          }
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
        top: 65%;
        transform: translateY(-50%);
        background-color: transparent;

        cursor: pointer;
        width: 50px;
        height: 50px;
        z-index: 1;
        &.slick-prev {
          left: 0px;
          &:before {
            color: ${colors.white};
            font-size: 3rem;
          }
        }
        &.slick-next {
          right: 12px;
          &:before {
            color: ${colors.white};
            font-size: 3rem;
          }
        }
      }
    }
  }
`
