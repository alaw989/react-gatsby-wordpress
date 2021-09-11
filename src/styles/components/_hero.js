import { props } from "bluebird"
import styled from "styled-components"
import { device } from "../mixins"
import { colors } from "../variables"

export const HeroContainer = styled.div`
  position: relative;
  height: 100vh;
  /* filter: drop-shadow(-17px 30px 16px rgba(46, 46, 40, 0.5)); */

  .bg-overlay {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
  }

  .section-hero {
    height: 100vh;
    position: relative;
    font-family: "Roboto Condensed", sans-serif;
    z-index: -1;
    /* clip-path: polygon(0 0, 75% 0%, 100% 0, 100% 82%, 25% 100%, 0 78%); */

    @media ${device.lg} {
      height: 100vh;
    }

    svg {
      height: 100%;
      .cls-1 {
        fill: ${props => (props.dark ? colors.primary : colors.white)};
      }
    }

    .hero-title {
      font-family: Roboto Condensed, sans-serif;
      position: absolute;
      z-index: 1;
      color: ${colors.white};
      top: 50%;
      left: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      line-height: 5rem;
      text-transform: uppercase;
      font-weight: 700;
      mix-blend-mode: overlay;
      opacity: 0;

      .top {
        font-size: 9rem;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        .icon {
          width: 100px;

          svg {
            position: relative;
          }
        }
      }
      .bottom {
        font-size: 3rem;
        font-weight: 400;
      }

      &[data-view="view-on"] {
        opacity: 1;
      }
    }

    @keyframes progress {
      0% {
        height: 0;
      }
      100% {
        height: 100%;
      }
    }
    .progress-bar {
      width: 3px;
      height: 200px;
      background-color: ${colors.white};
      position: absolute;
      top: 50%;
      right: 40%;
      transform: translateY(-50%);
      z-index: 1;

      @keyframes progress {
      0% {
        height: 0;
      }

      25% {
        height: 25%; 
      }
      50% {
        height: 50%; 
      }
      100% {
        height: 100%;
      }
    }
      @keyframes progress2 {
      0% {
        height: 0;
      }

      25% {
        height: 25%; 
      }
      50% {
        height: 50%; 
      }
      100% {
        height: 100%;
      }
    }

      .progress-inner {
        position: absolute;
        top: 0;
        background-color: ${colors.primary};
        width: 100%;
        transition: 6s all;
        height: 0;
        animation: progress 6s;
        &[data-active="active"] {
          animation: progress 6s  ;
          animation-timing-function: linear;
        }
        &[data-active="active2"] {
          animation: progress2 6s ;
          animation-timing-function: linear;
        }
      }
    }

    .slick-slide {
      height: 100vh;

      @media ${device.lg} {
        height: 100vh;
      }

      &.slick-active {
        .slider-container {
          .bgSlide {
            transform: scale(${props => props.timer});
          }
        }
      }

      .slider-container {
        .bgSlide {
          background-attachment: fixed;
          background-repeat: no-repeat;
          background-size: cover;
          height: 100vh;

          @media ${device.lg} {
            height: 100vh;
          }
          &:after {
            /* transform: translateY(${props => props.offsetY}px); */
            transition: 0.5s all;
            background-attachment: fixed;
          }
        }

        .bgText {
          color: ${colors.white};
          position: absolute;
          z-index: 99;
          top: 95%;
          left: 50%;
          transform: translate(-50%, -50%);
          font-size: 1rem;
          font-weight: 400;
          text-align: center;
          line-height: 1rem;
          transition: all 1s ease;
          @media ${device.lg} {
            font-size: 1.2rem;
            line-height: 3rem;
          }
          span {
            /* color: #fff;
          -webkit-text-fill-color: transparent;
          -webkit-text-stroke-width: 1px;
          -webkit-text-stroke-color: #fff;
          @media ${device.lg} {
            -webkit-text-stroke-width: 3px; */
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
      bottom: -1px;
      left: 0;
      z-index: 1;
    }

    .slick-slider.slick-initialized {
      overflow: hidden;
      height: 100vh;
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
      background-color: rgba(38, 67, 102, 0.4);
    }
  }
`
