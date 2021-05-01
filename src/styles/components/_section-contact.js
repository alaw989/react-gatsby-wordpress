import styled from "styled-components"
import { device } from "../mixins"
import { colors } from "../variables"

export const SectionContact = styled.div`
  font-family: "Roboto Condensed";

  .form-container {
    .form-heading {
      margin-bottom: 10px;
    }

    form {
      .form-group {
        input {
          border-radius: 0;
        }
      }
    }
  }

  .title {
    text-transform: uppercase;
    font-weight: 400;
    font-size: 1.7rem;

    @media ${device.lg} {
      font-size: 2rem;
    }
    span {
      font-weight: 700;
    }
  }

  .contact-container {
    .contact-info {
      svg {
        color: ${colors.primary};
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
      margin-bottom: 15px;
      a {
        color: ${colors.primary};
      }
    }
  }
`
