import styled from "styled-components"
import { device } from "../mixins"
import { colors } from "../variables"

export const PrimaryButton = styled.div`
  position: relative;
  overflow: hidden;
  border: 1px solid ${colors.white};
  position: relative;
  padding: 20px 35px 20px 35px;
  background-color: ${colors.secondary};

  a {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background-color: white;
    transition: 0.5s all;
    z-index: 2;
    cursor: pointer;
    border: none; 

    .overlay {
      width: 100%;
      height: 100%;
      cursor: pointer;
      background-color: ${colors.secondary};
      position: absolute;
      top: 0;
      left: 0;
      transition: 0.5s all;
      z-index: 2;
    }

    .button-text {
      position: relative;
      z-index: 3;
      transition: 0.5s all;
      text-transform: uppercase;
      font-size: 14px;
      color: ${colors.white};
      text-decoration: none;
    }
    &:hover {
      .overlay {
        top: -50px;
      }
      .button-text {
        color: ${colors.seconday};
      }
    }
  }

  a {
    /* /* background-color: ${colors.white} !important;
    border-radius: 0; */
    /* border: ${props => (props.border ? "1px solid red" : "none")}; */

    /* .overlay {
      width: 100%;
      height: 100%;
      cursor: pointer;
      background-color: ${colors.secondary};
      position: absolute;
      top: 0;
      left: 0;
      transition: 0.5s all;
      z-index: 2;
    }

    .button-text {
      position: relative;
      z-index: 3;
      transition: 0.5s all;
      text-transform: uppercase;
      font-size: 14px;
    } */

    /* &:hover {
      .overlay {
        top: -50px;
      }

      .button-text {
        color: ${colors.secondary};
      }
    } */
  }
`
