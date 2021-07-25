import styled from "styled-components"
// import { device } from "../mixins"
import { colors } from "../variables"

export const FooterContainer = styled.div`
  background-color: ${colors.primary};
  font-family: "Roboto Condensed", sans-serif;

  .section-footer {
    background-color: ${colors.white};
    margin-top: 50px; 
    .logo {
      display: flex; 
      justify-content: center; 
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
