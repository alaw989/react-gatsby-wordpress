import { slide as Menu } from "react-burger-menu"

import React, { Component } from "react"

const Mmenu = () => {
  return (
    <Menu styles={styles}>
      <a id="home" className="menu-item" href="/">
        Home
      </a>
      <a id="about" className="menu-item" href="/about">
        About
      </a>
      <a id="contact" className="menu-item" href="/contact">
        Contact
      </a>
    </Menu>
  )
}

export default Mmenu

var styles = {

  bmOverlay: {
    display: "none",
  },
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
    padding: "2.5em 1.5em 0",
    fontSize: "1.15em",
  },
  bmMorphShape: {
    fill: "#373a47",
  },
  bmItemList: {
    color: "#b8b7ad",
    padding: "0.8em",
  },
  bmItem: {
    display: "inline-block",
  },
  bmOverlay: {
    background: "rgba(0, 0, 0, 0.0)",

  },
}
