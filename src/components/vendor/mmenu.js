import { slide as Menu } from "react-burger-menu"
import { Link, useStaticQuery, graphql } from "gatsby"
import React from "react"
import styled from "styled-components"

const MMenuWrapper = styled.div`
height: 100%;
  /* @media (min-width: 992px) {
    display: none;
  } */
`

const Mmenu = () => {
  const data = useStaticQuery(graphql`
    query mmenuQuery {
      allWordpressWpApiMenusMenusItems {
        ...wordpress__wp_api_menus_menus_itemsConnectionFragment
      }
    }
  `)

  const menuItems = data.allWordpressWpApiMenusMenusItems.edges[0].node.items

  return (
    <MMenuWrapper>
      <Menu right styles={styles}
      isOpen={false}
      >
            {menuItems.map((page, index) => {
              const uri = `/${page.object_slug}`
              return (
                  <Link key={index} to={uri}>
                    {page.title}
                  </Link>
              )
            })}
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
    right: "0px",
    transform: "translate(-50%, -50%)",
    transition: '.5s all',
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
    right: "0",
    top:"0",
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
    textTransform: "uppercase",
    color: "white"
  },
  bmOverlay: {
    position: "fixed",
    zIndex: "1000",
    width: "100%",
    height: "100%", 
    opacity: "1",
    left: "0",
    top: "0",
    background: "rgba(0, 0, 0, 0.5)",
  },
}
