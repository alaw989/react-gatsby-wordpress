import styled from "styled-components"
import { device } from "../mixins"
import { colors } from "../variables"
import image from "../../images/HomeHero.jpg"

export const SectionAboutIntroStyles2 = styled.div`
  display: flex;
  align-items: center;
  transition: all 1.5s;
  background-image: url(${image});
  background-size: cover;
  background-repeat: no-repeat;
  position: relative;
  padding-top: 6em;
  padding-bottom: 6em;

  @media ${device.md} {
    padding-top: 8em;
    padding-bottom: 8em;
  }

  @media ${device.lg} {
    height: 100vh;
  }

  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: black;
    opacity: 0.3;
  }

  .section-about-intro {
    display: flex;
    height: 100vh;
    ${props => (props.dark ? "height: 100vh;" : "height: auto;")}
    font-family: 'Roboto Condensed';
    font-weight: 400;
    font-style: normal;

    transition: 0.5s all;
    height: 100%;
    color: ${colors.white};

    &[data-view2="view-on"] {
      color: ${colors.white};
    }

    @media ${device.lg} {
      flex-direction: row;
    }

    .content-container {
      display: flex;
      flex-direction: column;
      align-items: flex-start;

      @media ${device.lg} {
        padding: 0;
        padding-right: 100px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        transition: 0.5s all;
      }

      .supheading-container {
        display: flex;
        justify-content: center;
        align-items: center;

        @media ${device.lg} {
          justify-content: flex-start;
        }
        .tagline-line {
          display: inline-block;
          width: 50px;
          height: 2px;
          background-color: #48b2e6;
          margin-left: 10px;
          &.first {
            @media ${device.lg} {
              display: none;
            }
          }
        }
        .supheading {
          text-align: center;
          text-transform: uppercase;
          color: #48b2e6;
        }
      }

      .section-heading {
        display: flex;
        max-width: 850px;
        flex-wrap: wrap;
        margin-top: 0.1em;
        margin-bottom: 0.675em;
        font-size: 21px;
        line-height: 1.5em;
        font-weight: 700;
        text-align: center;
        transition: all 1.5s;
        font-weight: 400;

        @media ${device.md} {
          font-size: 33px;
          line-height: 45px; 
        }
        @media ${device.lg} {
          text-align: left;
          line-height: 50px;
          font-size: 43px;
        }
        @media ${device.xl} {
          text-align: left;
          font-size: 53px;
          line-height: 65px;
        }
      }
      .section-content {
        position: relative;
        width: 100%;
        max-width: 915px;
        margin-bottom: 0.75em;
        font-weight: 300;
        font-size: 1rem;
        line-height: 1.5em;
        color: #3d3d3d;
        text-align: center;
        padding: 0 8vw;
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
      height: 300px;
      z-index: -1;
      filter: drop-shadow(-17px 30px 16px rgba(46, 46, 40, 0.5));
      img {
        clip-path: polygon(0 7%, 100% 0%, 100% 93%, 0% 100%);
      }

      @media ${device.md} {
        height: 500px;
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
