import styled from "styled-components"
import { device } from "../mixins"

export const Navigation = styled.div`
 
  z-index: 1;
  background-color: white;
  width: 100%;
  opacity: 0.95;
  .section-navigation {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: $fff;
    font-family: "Roboto Condensed", sans-serif;
    height: 95px;

    .logo {
      height: 100%;
      display: flex;
      align-items: center;
      flex: 2;
      @media ${device.xl} {
        flex: 1;
      }
      .gatsby-image-wrapper {
        height: 100%;
        width: 100%;
      }
    }
    .navigation-menu {
      display: flex;
      justify-content: center;
      height: 100%;
      flex: 2;
      ul {
        display: flex;
        margin: 0;
        height: 100%;
        align-items: center;
        justify-content: center;

        li {
          display: flex;
          list-style-type: none;
          margin-bottom: 0;
          margin-left: 5px;
          margin-right: 5px;
          height: 100%;
          a {
            color: #032f78;
            text-decoration: none;
            text-transform: uppercase;
            margin-right: 5px;
            margin-bottom: 0;
            font-weight: 700;
            transition: 0.5s all;
            font-size: 16px;
            height: 100%;
            display: flex;
            align-items: center;
            padding: 35px 0;
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
      flex: 1;
      justify-content: flex-end;
      a.phone-container {
        display: flex;
        justify-content: flex-start;
        height: 100%;
        flex: 1;
        text-decoration: none;
        max-width: 75px;
        @media ${device.lg} {
          width: 195px;
          max-width: 195px;
        }
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
            @media ${device.lg} {
              display: none;
            }
          }
          .number {
            font-size: 1.6rem;
            font-weight: 700;
            display: none;

            @media ${device.lg} {
              display: block;
            }
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
        width: 75px;
        max-width: 75px;
        @media ${device.lg} {
          width: 165px;
          max-width: 165px;
        }
        .contact-text {
          text-transform: uppercase;
          color: #fff;
          display: none;
          height: 100%;
          font-size: 14px;
          @media ${device.lg} {
            display: flex;
            align-items: center;
            justify-content: center;
          }
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
