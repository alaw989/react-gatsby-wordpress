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
`
