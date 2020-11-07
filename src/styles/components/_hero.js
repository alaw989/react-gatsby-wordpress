import styled from "styled-components"
import { device } from "../mixins"

export const HeroContainer = styled.div`
  .section-hero {
    height: 65vh;
    position: relative; 
    svg {
      position: absolute;
    width: 100%;
    bottom: 0;
    left: 0;
    
    z-index: 1;
}
    
    @media ${device.lg} {
      height: 65vh;
    }
    .bgSlide {
      height: 65vh !important;
    }
  }
`
