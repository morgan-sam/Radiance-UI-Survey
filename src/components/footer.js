import React from "react"

import "../css/footer.css"

const Footer = ({ siteTitle }) => {
  return (
    <div className="footer">
      <h1 className="logo">{siteTitle}</h1>
      <div>
        © {new Date().getFullYear()} {siteTitle}
      </div>
    </div>
  )
}

export default Footer
