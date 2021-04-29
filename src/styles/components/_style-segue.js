import styled from "styled-components"
import { device } from "../mixins"
import { colors } from "../variables"

export const StyleSegue = styled.div`
  .section-segue {
    font-family: "Roboto Condensed", sans-serif;
    background-color: ${colors.primary};

    svg {
        transform: rotate(180deg);
        margin-top: -1px;
    }

    .cta {
      display: flex;
      flex-direction: column;
      justify-content: center;
      text-align: center;
      margin-top: 4vw;
      margin-bottom: 4vw;
      @media ${device.md} {
        flex-direction: row;
        align-items: center;    
      }
      .text-block {
        width: 100%;
        margin-right: 0px;
        font-size: 1.7rem;
        text-align: center;
        color: ${colors.white};
        font-weight: 700;
        margin-bottom: 15px;
        @media ${device.md} {
          font-size: 2.5rem;
          margin-bottom: 0;
          text-align: left;
          margin-right: 50px;
        }
        @media ${device.lg} {
          width: 75%;
          font-size: 2.5rem;
          line-height: 1em;
          max-width: 800px;
        }
      }
      .btn-primary-custom {
        align-self: center;
      }
    }
  }
`
