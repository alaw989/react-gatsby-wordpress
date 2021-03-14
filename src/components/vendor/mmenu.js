import { slide as Menu } from "react-burger-menu"
import { Link, useStaticQuery, graphql } from "gatsby"
import React from "react"
import styled from "styled-components"

const MMenuWrapper = styled.div`
  @media (min-width: 992px) {
    display: none;
  }
`

const Mmenu = () => {
  const data = useStaticQuery(graphql`
    query mmenuQuery {
      allWordpressWpApiMenusMenusItems {
        edges {
          node {
            items {
              title
              object_slug
            }
          }
        }
      }
    }
  `)

  console.log('data:', data.allWordpressWpApiMenusMenusItems.edges[0].node) 
  return (
    <MMenuWrapper>
      <Menu styles={styles}>
        {/* {data.allWordpressWpApiMenusMenusItems.edges[0].node.map(x => {
          return (
            <li key={x.object_slug}>
              <Link key={x.object_slug} to={x.object_slug}>
                {x.title}
              </Link>
            </li>
          )
        })} */}
      </Menu>
    </MMenuWrapper>
  )
}

export default Mmenu

var styles = {
  bmBurgerButton: {
    position: "absolute",
    width: "36px",
    height: "30px",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
  },
  bmBurgerBars: {
    background: "#fff",
  },
  bmBurgerBarsHover: {
    background: "#a90000",
  },
  bmCrossButton: {
    height: "24px",
    width: "24px",
  },
  bmCross: {
    background: "#bdc3c7",
  },
  bmMenuWrap: {
    position: "fixed",
    height: "100%",
    left: "0",
  },
  bmMenu: {
    background: "#373a47",
    padding: "0em 1.5em 0",
    fontSize: "1.15em",
  },
  bmMorphShape: {
    fill: "#373a47",
  },
  bmItemList: {
    color: "#b8b7ad",
    padding: "0.8em",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  bmItem: {
    display: "inline-block",
  },
  bmOverlay: {
    display: "none",
    background: "rgba(0, 0, 0, 0.0)",
  },
}
