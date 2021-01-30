import styled from "styled-components"
import { device } from "../mixins"
import { colors } from "../variables"

export const FooterContainer = styled.div`
  background-color: ${colors.primary};
  font-family: "Roboto Condensed", sans-serif;

  .nav-menu {
    background-color: ${colors.white};

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
        }   
      }
    }
  }

  .sub-footer {
    font-size: 0.7rem;
    display: flex;
    justify-content: center;
    padding: 10px 0;
    color: ${colors.white};
    margin-top: 50px;
  }
`
