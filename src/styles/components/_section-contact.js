import styled from "styled-components"
import { device } from "../mixins"
import { colors } from "../variables"

export const SectionContact = styled.div`
   font-family: "Roboto Condensed";
  .title {
    text-transform: uppercase;
    font-weight: 400;
    font-size: 2rem;
 

    @media ${device.lg} {
      font-size: 3.5rem;
    }
    span {
      font-weight: 700;
    }
  }
`
