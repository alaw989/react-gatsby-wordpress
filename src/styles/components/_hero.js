import styled from "styled-components"
import { device } from "../mixins"

export const HeroContainer = styled.div`
  .section-hero {
    height: 65vh;
    position: relative;

    @media ${device.lg} {
      height: 75vh;
    }

    .bgSlide {
      height: 75vh !important;
    }

    svg {
      position: absolute;
      width: 100%;
      bottom: 0;
      left: 0;
      z-index: 1;
    }

    .slick-slider.slick-initialized {
      overflow: hidden;
      height: 65vh;
      @media ${device.lg} {
        height: 75vh;
      }
    }

    .overlay {
      position: absolute; 
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      background-color:  rgba(38, 67, 102, .5);
    }

  }
`
