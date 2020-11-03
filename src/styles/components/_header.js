import styled from "styled-components"
import { device } from "../mixins"

export const Navigation = styled.div`
  .section-navigation {
    /* display: flex; */
    align-items: center;
    background-color: $fff;
    font-family: "Roboto Condensed", sans-serif;
    .logo {
      max-width: 100%;
      max-height: 100%;
      height: 100%;
      .gatsby-image-wrapper {
        height: 100%;
        width: 100%;
      }
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
