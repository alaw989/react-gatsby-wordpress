import styled from "styled-components"
import { device } from "../mixins"
import { colors } from "../variables"

export const SectionContact = styled.div`
  font-family: "Roboto Condensed";
  background-color: ${colors.white};
  padding-top: 6rem;

  .form-container {
    .title {
      text-transform: uppercase;
      font-weight: 400;
      font-size: 1.7rem;
      color: ${colors.primary};

      @media ${device.lg} {
        font-size: 2rem;
      }
      span {
        font-weight: 700;
      }
    }

    .form-heading {
      margin-bottom: 10px;
      color: ${colors.primary};
    }

    form {
      .form-group {
        input {
          border-radius: 0;
          box-shadow: rgb(0 45 60 / 20%) 0 0 0 1px inset;
          font-family: "Roboto Condensed";
          padding: 1.5rem 1rem;
          font-size: 1.2rem;
        }
      }
    }
  }

  .contact-container {
    .title {
      color: ${colors.primary};
    }
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
