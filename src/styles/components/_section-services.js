import styled from "styled-components"
import { device } from "../mixins"
import { colors } from "../variables"
import Angle1 from "../../images/angle1.svg"
import Angle2 from "../../images/angle2.svg"
import Angle3 from "../../images/angle3.svg"
// import BackgroundImage from "gatsby-background-image"

export const SectionServicesStyles = styled.div`
  font-family: "Roboto Condensed", sans-serif;
  position: relative;
  background-image: url(${Angle1}), url(${Angle2}), url(${Angle3});
  background-position: 100% 0, 0 0, 100% 0;
  background-repeat: no-repeat, no-repeat, no-repeat;
  background-size: contain, 40%, cover;
  padding: 3em 0;

  @media ${device.lg} {
    padding: 6em 0;
  }

  .section-services {
    height: 100%;
    font-family: "Roboto Condensed", sans-serif;
    .section-title-container {
      display: flex;
      justify-content: center;
      align-items: center;
      text-align: center;
      .section-title {
        text-transform: uppercase;
        font-family: "Roboto Condensed", sans-serif;
        color: ${colors.primary};
        font-size: 1.8rem;

        @media ${device.lg} {
          font-size: 2.4rem;
        }
        span {
          font-weight: 600;
        }
      }
    }

    .services-selector {
      text-align: center;
      padding-bottom: 14px;
      display: flex;
      flex-direction: column;

      @media ${device.md} {
        flex-direction: row;
        justify-content: center;
        flex-wrap: wrap;
        bottom: 65px;
        z-index: 1;
      }

      @media ${device.lg} {
        position: absolute;
        flex-direction: column;
        bottom: 65px;
        z-index: 1;
      }

      .services-link-container {
        display: flex;
        justify-content: center;

        @media ${device.md} {
          margin: 0 25px;
          margin-bottom: 5px;
        }

        @media ${device.lg} {
          justify-content: flex-start;
        }

        .services-link {
          margin-top: 0.25em;
          margin-bottom: 0.8em;
          padding-bottom: 0;
          text-transform: uppercase;
          color: ${colors.lightblue};
          font-weight: 600;
          line-height: 1em;
          letter-spacing: 0.0325em;
          font-size: 1rem;
          cursor: pointer;
        }
      }
    }

    .services-information {
      display: flex !important;
      margin-bottom: 20px;
      flex-direction: column;
      align-items: center;
      position: relative; 
      .services-image {
        width: 100%;
        height: 350px;
        background-size: cover;

        @media ${device.lg} {
          min-height: 550px;
          max-width: 65%;
        }
      }
      .services-content {
        text-align: center;
        width: 90%;
        padding: 2.5em 3em 2.5em 3em;
        margin-top: -65px;
        background-color: #fff;
        position: relative;
        z-index: 3;
        box-shadow: rgb(0 0 0 / 15%) 0 0 30px 0;

        @media ${device.lg} {
          display: flex;
          flex-direction: column;
          justify-content: center;
          position: absolute;
          padding: 2.5em 3em 2.5em 3em;
          width: 57%;
          max-width: 500px;
          top: 110px;
          min-height: 450px;
          right: 25px;
          text-align: left;
        }

        .services-subheading {
          text-transform: uppercase;
          font-size: 1rem;
          margin-bottom: 1.25em;
          line-height: 1em;
          font-weight: 500;
          letter-spacing: 0.025em;
          color: #000;
        }
        .services-heading {
          color: #62a8c4;
          font-weight: 700;
          font-size: 1.6rem;
          margin-bottom: 0.5em;
          line-height: 1.25em;
        }
        .services-description {
          color: #000;
          margin-bottom: 1.3em;
          font-size: 17px;
        }
      }
    }
  }
`
