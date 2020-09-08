import COLORS from "tinycolor2"
import { LinkButton, Button } from "radiance-ui"
import PropTypes from "prop-types"
import React from "react"

import "../css/index.css"

const Header = ({ siteTitle }) => (
  <header className="header">
    <h1 className="logo">{siteTitle}</h1>
    <div className="link-container">
      <a className="link-text">WHY CUROLOGY</a>
      <a className="link-text">REVIEWS</a>
      <a className="link-text">COMMUNITY</a>
      <a className="link-text">SURVEY</a>
    </div>
    <div className="login-btn-container">
      <a className="link-text">LOG IN</a>
      <Button.Container>
        <LinkButton
          buttonColor={COLORS.statusRed}
          buttonType="secondary"
          style={{ minWidth: "0", userSelect: "none" }}
        >
          START TRIAL
        </LinkButton>
      </Button.Container>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
