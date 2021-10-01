import styled, { css } from "styled-components"
import { device } from "../mixins"
import { colors } from "../variables"

export const SectionFooterStyles = styled.div`
  background-color: ${colors.primary};
  font-family: "Roboto Condensed", sans-serif;
  display: ${props =>
    props.page == "home2" ? console.log(props.page) : "block"};

  .section-footer {
    background-color: ${colors.white};
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    margin-top: 20vh;

    ${props =>
      props.page == "home" &&
      css`
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        margin-bottom: 14em;
        height: 100vh;
      `};

    .logo {
      display: flex;
      justify-content: center;
    }

    .touch-container {
      margin-bottom: 3em;
      .higher {
        font-size: 7.46667vw;
        margin-bottom: 4px;

        @media ${device.md} {
          font-size: 4.23424vw;
        }
      }
      .lower {
        font-size: 7.46667vw;
        color: ${colors.secondary};

        @media ${device.md} {
          font-size: 4.23424vw;
        }
      }
    }

    .contact-link {
      text-transform: uppercase;
      font-weight: 700;

      a {
        color: ${colors.primary};
        text-decoration: none;
        font-size: 3.2342vw;
        @media ${device.md} {
          font-size: 1.83424vw;
        }
      }
    }

    form {
      max-width: 400px;
      input {
        border: none;
        border-bottom: 1px solid ${colors.black};
        border-radius: 0;
        padding-left: 0;
        &::placeholder {
          font-weight: 100;
          font-family: "Roboto Condensed" sans-serif;
        }
      }
    }

    .phone {
      background-color: ${colors.white};
      color: ${colors.primary};
      display: flex;
      justify-content: center;
      font-size: 1.5rem;
      margin-top: 25px;
      margin-bottom: 10px;
    }

    .nav-menu {
      background-color: ${colors.white};
      margin-top: 0.5em;
      margin-bottom: 0.75em;

      ul {
        display: flex;
        justify-content: center;
        list-style-type: none;
        margin: 0;
        padding: 0;
        li {
          margin: 0 5px;
          a {
            color: ${colors.primary};
            text-transform: uppercase;
          }
        }
      }
    }

    .sub-footer {
      font-size: 0.7rem;
      margin-top: 50px;
      display: flex;
      justify-content: center;
      padding: 12px 0;
      color: ${colors.white};
      background-color: ${colors.primary};
    }
  }
`
