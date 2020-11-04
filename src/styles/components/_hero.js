import styled from "styled-components"
import { device } from "../mixins"

export const HeroContainer = styled.div`
  .section-hero {
    height: 65vh;
    @media ${device.lg} {
      height: 73vh;
    }
    .gatsby-image-wrapper {
      height: 65vh !important;
    }
  }
`
