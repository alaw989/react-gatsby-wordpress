import styled from "styled-components"
import { xs, sm, md, lg, xl, xxl } from "../mixins"

export const Navigation = styled.div`
  .section-navigation {
    /* display: flex; */
    align-items: center;
    background-color: $fff;
    font-family: "Roboto Condensed", sans-serif;
    .logo {
      max-width: 100px;
      max-height: 100px;
    }
    .navigation-menu {
      display: flex;
      justify-content: center;
      height: 100%;
      ul {
        display: flex;
        margin: 0;
        height: 100%;
        align-items: center;
        justify-content: center;
        li {
          list-style-type: none;
          margin-bottom: 0;
          margin-left: 5px;
          margin-right: 5px;
          a {
            color: #032f78;
            text-decoration: none;
            text-transform: uppercase;
            margin-right: 5px;
            margin-bottom: 0;
            font-weight: 700;
            transition: .5s all;
            font-size: 16px;
            &:hover {
                color: red;
            }
            &:last-child {
              margin-right: 0;
            }
          }
        }
      }
    }
    .right-container {
      position: relative;
      height: 100%;
      display: flex;
      a.phone-container {
        display: flex;
        justify-content: flex-start;
        height: 100%;
        flex: 1;
        text-decoration: none;
        .phone {
          height: 100%;
          width: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          color: white;
          text-decoration: none;
          background-color: #fff;
          color: #bb0000;
          font-size: 1.7em;
          svg {
            ${lg(`display: none;`)}
          }
          .number {
            font-size: 1.6rem;
            font-weight: 700;
            display: none;
            ${lg(`display: block`)}
          }
        }
      }
      .menu-container {
        position: relative;
        flex: 1;
        background-color: #bb0000;
        display: flex;
        align-items: center;
        justify-content: center;
        .contact-text {
          text-transform: uppercase;
          color: #fff;
          display: none;
          height: 100%;
          font-size: 14px;

          ${
            lg(`display: flex;
                align-items: center;
                justify-content: center;
              `)
            };
        }
        a {
          height: 100%;
          width: 100%;
          text-decoration: none;
        }
      }
    }
  }
`