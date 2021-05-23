import styled from "styled-components"
import { device } from "../mixins"
import { colors } from "../variables"

export const HeroContainer = styled.div`
  position: relative;

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
      height:100%;
      .cls-1 {
        fill: ${props => (props.dark ? colors.primary : colors.white)};
      }
    }

    .hero-title {
      font-family: Roboto Condensed, sans-serif;
      position: absolute; 
      z-index:1;
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
      transition: .5s all;
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

    .slick-slide {
      height: 100vh;
      @media ${device.lg} {
        height: 100vh;
      }

      @keyframes shrink {
  0% {
    transform: scale(1.2)
  }
  100% {
    transform: scale(1.0)
  }
}
      .bgSlide {
    
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        height: 100vh;
        animation: shrink 15s infinite alternate;
        transition: .5s all;
        @media ${device.lg} {
          height: 100vh;
        }
        &:after {
          transform: translateY(-${props => props.position}px);
          transition: .5s all;
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
