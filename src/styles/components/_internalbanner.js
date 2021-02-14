import styled from "styled-components"
import { device } from "../mixins"
import { colors } from "../variables"




export const InternalBannerContainer = styled.div`

height: 45vh;
    position: relative;
    font-family: "Roboto Condensed", sans-serif;

    @media ${device.lg} {
      height: 72vh;
    }

`
 
