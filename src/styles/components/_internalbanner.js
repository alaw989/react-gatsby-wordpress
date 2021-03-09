import styled from "styled-components"
import { device } from "../mixins"
import { colors } from "../variables"

export const InternalBannerContainer = styled.div`
  height: 45vh;
  position: relative;
  font-family: "Roboto Condensed", sans-serif;

  @media ${device.lg} {
    height: 72vh;
  }

  .section-hero.internal {
    position: absolute;
    width: 100%;
    height: 100%;
  }

  svg {
    position: absolute;
    bottom: 0;
    z-index: 1;
  }

  .bgImage {
    position: absolute;
    width: 100%;
    height: 100%;
  }

  .overlay { 
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background-color: rgba(38,67,102,0.8);
  }

  .title {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-transform: uppercase;
    color: ${colors.white};
  }
`
