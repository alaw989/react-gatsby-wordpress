import styled from "styled-components"
import { device } from "../mixins"
import { colors } from "../variables"

export const Navigation = styled.div`
  position: absolute;
  background-color: ${colors.white};
  z-index: 1;
  width: 100%;
  opacity: 0.95;
  .section-navigation {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: transparent;
    font-family: "Roboto Condensed", sans-serif;
    height: 95px;
    box-shadow: 0 1px 0 0 rgb(0 0 0 / 10%);

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
            position: relative; 
            color: ${colors.primary};
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
            &:after {
              content: '';
              position: absolute; 
              background-color: red; 
              width: 0; 
              height: 3px; 
              bottom: 0; 
              left: 50%; 
              transform: translateX(-50%);
              transition: .5s all;
            }

            &:hover::after {
              width: 100%; 
            }
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
          text-decoration: none;
          background-color: transparent;
          color: ${colors.secondary};
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
        background-color: transparent;
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
