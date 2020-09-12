import React from "react"
import { Link } from "gatsby"

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
        <h1 className="footer-logo">{siteTitle}</h1>
        <div className="footer-links-horizontal">
          <div className="footer-link-container">
            <a className="footer-link" href="https://curology.com/why-curology">
              Why Curology
            </a>
            <a className="footer-link" href="https://curology.com/community">
              Community
            </a>
            <a className="footer-link" href="https://curology.com/our-story">
              Out Story
            </a>
            <a className="footer-link" href="https://curology.com/guides">
              Guides
            </a>
            <Link className="footer-link" to="/">
              Survey
            </Link>
          </div>
          <div className="footer-link-container">
            <a className="footer-link" href="https://blog.curology.com/">
              Blog
            </a>
            <a className="footer-link" href="https://support.curology.com/">
              Support
            </a>
            <a
              className="footer-link"
              href="https://curology.com/skincare/reviews"
            >
              Reviews
            </a>
            <a className="footer-link" href="https://curology.com/careers">
              Careers
            </a>
            <a className="footer-link" href="https://curology.com/contact-us">
              Contact Us
            </a>
          </div>
        </div>
      </div>
      <div className="footer-section">
        <div className="social-media-container">
          <div>Follow @curology</div>
          <div className="icon-container">
            <img
              src={instagram}
              alt="Instagram Logo"
              href="https://www.instagram.com/curology/"
            />
            <img
              src={facebook}
              alt="Facebook Logo"
              href="https://www.facebook.com/Curology/"
            />
            <img
              src={snapchat}
              alt="Snapchat Logo"
              href="https://www.snapchat.com/add/curology"
            />
            <img
              src={twitter}
              alt="Twitter Logo"
              href="https://twitter.com/CurologyUSA"
            />
            <img
              src={youtube}
              alt="Youtube Logo"
              href="https://www.youtube.com/Curology"
            />
            <img
              src={pinterest}
              alt="Pinterest Logo"
              href="https://www.pinterest.com/curology/"
            />
          </div>
          {/* <a>Need financial assistance?</a> */}
        </div>
      </div>
      <div className="footer-section">
        <div className="footer-privacy-container">
          <div className="survey-privacy-text">
            © {new Date().getFullYear()} {siteTitle}
          </div>
          <a className="survey-privacy-text" href="https://curology.com/terms/">
            Terms of Service
          </a>
          <a
            className="survey-privacy-text"
            href="https://curology.com/privacy/"
          >
            Privacy
          </a>
          <a
            className="survey-privacy-text"
            href="https://curology.com/donotsell"
          >
            Do not sell my information
          </a>
        </div>
      </div>
    </div>
  )
}

export default Footer
