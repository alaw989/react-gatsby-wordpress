import styled from "styled-components"
import { device } from "../mixins"

export const AboutIntroContainer = styled.div`
  .section-about-intro {
    font-family: "Roboto Condensed", sans-serif;
    .section-heading {
      margin-top: 0.1em;
      margin-bottom: 0.375em;
      color: #25539e;
      font-size: 4rem;
      line-height: 1em;
      font-weight: 700;
      text-transform: uppercase;
    }
    .section-content {
        position: relative;
    width: 100%;
    max-width: 915px;
    margin-bottom: .75em;
    font-weight: 300;
    font-size: 1rem;
    line-height: 1.5em;
    color: #3d3d3d;
    }
  }

  .intro-bg {
    height: 300px;
    width: 100%;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: 50%;
    @media ${device.lg} {
      height: 100%;
    }
  }
`
