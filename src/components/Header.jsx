import COLORS from "tinycolor2"
import { LinkButton, Button } from "radiance-ui"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import React, { useState } from "react"

import "../css/header.css"
import "../css/header-desktop.css"
import cancel from "../svg/cancel.svg"
import hamburger from "../svg/hamburger.svg"

const Header = ({ siteTitle }) => {
  const [open, setOpen] = useState(false)
  return (
    <header className="header">
      <div className="mobile-header">
        <a href="https://curology.com/">
          <h1 className="logo">{siteTitle}</h1>
        </a>
        <img
          src={hamburger}
          className="hamburger-button"
          onClick={() => setOpen(true)}
          alt="Open Menu"
        />
      </div>
      <div className={`main-header ${open ? "open" : null}`}>
        <div className="title-container">
          <a href="https://curology.com/">
            <h1 className="logo">{siteTitle}</h1>
          </a>
          <img
            src={cancel}
            className="cross"
            onClick={() => setOpen(false)}
            alt="Close Menu"
          />
        </div>
        <div className="link-container">
          <a className="link-text" href="https://curology.com/why-curology">
            Why Curology
          </a>
          <a className="link-text" href="https://curology.com/skincare/reviews">
            Reviews
          </a>
          <a className="link-text" href="https://curology.com/community">
            Community
          </a>
          <Link className="link-text" to="/">
            Survey
          </Link>
        </div>
        <div className="login-btn-container">
          <Button.Container>
            <LinkButton
              buttonColor={COLORS.statusRed}
              buttonType="secondary"
              style={{ minWidth: "4rem", userSelect: "none" }}
            >
              LOG IN
            </LinkButton>
          </Button.Container>
          <Button.Container>
            <LinkButton
              buttonColor={COLORS.statusRed}
              buttonType="primary"
              style={{ minWidth: "4rem", userSelect: "none" }}
            >
              START TRIAL
            </LinkButton>
          </Button.Container>
        </div>
      </div>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
