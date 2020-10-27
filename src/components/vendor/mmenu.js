import { slide as Menu } from "react-burger-menu"
import { Link, useStaticQuery } from "gatsby"
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
      wordpress {
        menus {
          nodes {
            name
            menuItems {
              nodes {
                label
                id
                url
                path
              }
            }
            id
            slug
          }
        }
      }
      # allThemeOptions {
      #   nodes {
      #     phone_number
      #     logo {
      #       url
      #     }
      #   }
      # }
    }
  `)
  return (
    <MMenuWrapper>
      <Menu styles={styles}>
        {data.wordpress.menus.nodes[0].menuItems.nodes.map(x => {
          return (
            <li key={x.id}>
              <Link key={x.id} to={x.path}>
                {x.label}
              </Link>
            </li>
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
