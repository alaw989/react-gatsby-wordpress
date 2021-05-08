import styled from "styled-components"
import { device } from "../mixins"
import { colors } from "../variables"

export const SectionContact = styled.div`
  font-family: "Roboto Condensed";
  background-color: ${colors.primary};

  .form-container {
    .form-heading {
      margin-bottom: 10px;
      color: ${colors.white};
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
    .title {
      color: ${colors.white};
    }
    .contact-info {
      svg {
        color: ${colors.white};
        margin-right: 5px;
      }
    }
    .phone {
      display: flex;
      align-items: center;
      margin-bottom: 5px;
      a {
        color: ${colors.white};
      }
    }
    .email {
      margin-bottom: 15px;
      a {
        color: ${colors.white};
      }
    }
  }
`
