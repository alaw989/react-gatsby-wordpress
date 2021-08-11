import styled from "styled-components"
import { device } from "../mixins"
import { colors } from "../variables"

export const InternalBannerContainer = styled.div`
  height: 350px;
  min-height: 350px;
  position: relative;
  font-family: "Roboto Condensed", sans-serif;

  @media ${device.lg} {
    min-height: 450px;
  }

  .section-hero.internal {
    position: absolute;
    width: 100%;
    height: 100%;
    background-image: url("./BGOverlay.svg");
    background-size: cover;
    background-position: 50% 50%;
  }

  .bg-overlay {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    svg {
      top: 0;
      height: 100%;
      width: 100%;
    }
  }

  svg {
    position: absolute;
    bottom: 0;
    z-index: 1;
    width: 100%;
    .cls-1 {
      fill: ${props => (props.dark ? colors.primary : colors.white)};
    }
  }

  .bgImage {
    position: absolute;
    width: 100%;
    height: 100%;
    opacity: 0.6;

    &:after {
      background-attachment: fixed;
    }
  }

  .overlay {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background: linear-gradient(
      90deg,
      rgba(3, 51, 121, 0.25843840954350494) 0%,
      rgba(3, 51, 121, 0.26404065043986347) 100%
    );
  }

  .title {
    position: absolute;
    top: 40%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-transform: uppercase;
    color: ${colors.white};
    font-size: 5vw;
    font-weight: 700;
  }
`
