import styled from "styled-components"
import { device } from "../mixins"
import { colors } from "../variables"

export const SectionPortfolio = styled.div`
  font-family: "Roboto Condensed";

  .nav-container {
    @media ${device.lg} {
      border-right: 1px solid black;
    }

    ul.nav {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: center;
      margin: 0;

      @media ${device.lg} {
        flex-direction: column;
      }
      li {
        margin: 0 5px;
        cursor: pointer;
      }
    }
  }

  .pdf-container {
    .pdf-wrapper {
      display: flex !important;
      .misc-pdf-image {
        width: 300px;
        height: 300px;
      }
      .bridges-pdf-image {
        width: 300px;
        height: 300px;
      }
      .commercial-pdf-image {
        width: 300px;
        height: 300px;
      }
      .industrial-pdf-image {
        width: 300px;
        height: 300px;
      }
      a {
        display: block;
      }
    }
  }
`
