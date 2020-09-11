import React from "react"

import instagram from "../svg/social_media/instagram.svg"
import facebook from "../svg/social_media/facebook.svg"
import snapchat from "../svg/social_media/snapchat.svg"
import twitter from "../svg/social_media/twitter.svg"
import youtube from "../svg/social_media/youtube.svg"
import pinterest from "../svg/social_media/pinterest.svg"

import "../css/footer.css"

const Footer = ({ siteTitle }) => {
  return (
    <div className="footer">
      <div className="footer-section">
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
      </div>
      <div className="footer-section">
        <div className="social-media-container">
          <div>Follow @curology</div>
          <div className="icon-container">
            <img src={instagram} />
            <img src={facebook} />
            <img src={snapchat} />
            <img src={twitter} />
            <img src={youtube} />
            <img src={pinterest} />
          </div>
          <a>Need financial assistance?</a>
        </div>
      </div>
      <div className="footer-section">
        <div className="footer-privacy-container">
          <div className="survey-privacy-text">
            © {new Date().getFullYear()} {siteTitle}
          </div>
          <a className="survey-privacy-text">Terms of Service</a>
          <a className="survey-privacy-text">Privacy</a>
          <a className="survey-privacy-text">Do not sell my information</a>
        </div>
      </div>
    </div>
  )
}

export default Footer
