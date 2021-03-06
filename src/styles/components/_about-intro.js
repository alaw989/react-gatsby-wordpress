import styled from "styled-components"
import { device } from "../mixins"

export const AboutIntroContainer = styled.div`
  @media ${device.lg} {
    margin: 0 auto;
    margin-top: 50px;
  }
  .section-about-intro {
    font-family: "Roboto Condensed", sans-serif;

    display: flex;
    flex-direction: column;

    @media ${device.lg} {
      flex-direction: row;
      max-width: 83%;
      margin: 0 auto;
    }

    .content-container {
      @media ${device.lg} {
        padding: 0;
        padding-right: 100px;
        display: flex;
        flex-direction: column;
        justify-content: center;
      }
      .section-heading {
        margin-top: 0.1em;
        margin-bottom: 0.375em;
        color: #25539e;
        font-size: 4rem;
        line-height: 1em;
        font-weight: 700;
        text-transform: uppercase;
        text-align: center;
        @media ${device.lg} {
          text-align: left;
        }
      }
      .section-content {
        position: relative;
        width: 100%;
        max-width: 915px;
        margin-bottom: 0.75em;
        font-weight: 300;
        font-size: 0.9rem;
        line-height: 1.5em;
        color: #3d3d3d;
        text-align: center;
        padding: 0 5%;
        @media ${device.lg} {
          text-align: left;
          padding: 0;
          font-size: 1rem;
        }
      }
    }

    .intro-image {
      height: 100%;
      position: relative;
      overflow: hidden;
      height: 85vh;
      filter: drop-shadow(-17px 30px 16px rgba(46, 46, 40, 0.5));
      img {
        clip-path: polygon(0 7%, 100% 0%, 100% 93%, 0% 100%);
      }
      @media ${device.lg} {
        width: 650px;
        height: 650px;

        left: 0;
      }
      svg.upper-angle {
        position: absolute;
        z-index: 1;
        transform: rotate(180deg);
        width: 140%;
        top: -1px;
        left: -1px;
      }
      svg.lower-angle {
        position: absolute;
        z-index: 1;
        bottom: -1px;
        width: 175%;
        right: 0;
      }
    }
  }

  .intro-bg {
    width: 100%;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: 50%;
    height: 100%;
    @media ${device.lg} {
    }
  }
`
