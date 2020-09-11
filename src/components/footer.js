import React from "react"

import "../css/footer.css"

const Footer = props => {
  return (
    <div className="footer">
      © {new Date().getFullYear()}, Built with
      {` `}
      <a href="https://www.gatsbyjs.org">Gatsby</a>
    </div>
  )
}

export default Footer
