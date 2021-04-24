import styled from "styled-components"
import { device } from "../mixins"
import { colors } from "../variables"

export const SectionContact = styled.div`
  font-family: "Roboto Condensed";

  .form-container {
    .form-heading {
      margin-bottom: 10px; 
    }
  }

  .title {
    text-transform: uppercase;
    font-weight: 400;
    font-size: 2rem;

    @media ${device.lg} {
      font-size: 0.2.5rem;
    }
    span {
      font-weight: 700;
    }
  }

  .contact-container {
    .contact-info {
      svg {
        color: ${colors.secondary};
        margin-right: 5px;
      }
    }
    .phone {
      display: flex;
      align-items: center;
      margin-bottom: 5px;
      a {
        color: ${colors.primary};
      }
    }
    .email {
      margin-bottom: 5px;
      a {
        color: ${colors.primary};
      }
    }
  }
`
