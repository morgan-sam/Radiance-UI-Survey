import React from "react"

import "../css/footer.css"

const Footer = ({ siteTitle }) => {
  return (
    <div className="footer">
      <h1 className="logo">{siteTitle}</h1>
      <div className="footer-links-horizontal">
        <div className="footer-link-container">
          <a className="footer-link">Why Curology</a>
          <a className="footer-link">Community</a>
          <a className="footer-link">Out Story</a>
          <a className="footer-link">Guides</a>
          <a className="footer-link">Survey</a>
        </div>
        <div className="footer-link-container">
          <a className="footer-link">Blog</a>
          <a className="footer-link">Support</a>
          <a className="footer-link">Reviews</a>
          <a className="footer-link">Careers</a>
          <a className="footer-link">Contact Us</a>
        </div>
      </div>
      <div>
        © {new Date().getFullYear()} {siteTitle}
      </div>
    </div>
  )
}

export default Footer
