import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Button } from "radiance-ui"
import { PlanIcon, GiftIcon, SmileIcon } from "radiance-ui/lib/icons"
import { Callout, Typography } from "radiance-ui"
import "../css/index.css"
import PatternAttacher from "../components/patternAttacher"
import COLORS from "tinycolor2"
import List from "../components/list"
import { lorem } from "../js/lorem"
import blob from "../svg/blob.svg"
import star from "../svg/star.svg"

const firstImage =
  "https://images.unsplash.com/photo-1570554520913-ce2192a74574?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
const secondImage =
  "https://images.unsplash.com/photo-1556228720-950d08a2a516?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
const thirdImage =
  "https://images.unsplash.com/photo-1556227703-cb5f1596c6b0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
const fourthImage =
  "https://images.unsplash.com/photo-1556228578-626e9590b81f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="section splash">
      <img className="splash-image"></img>
      <div className="splash-text-container">
        <div className="splash-main-text">Need a check up?</div>
        <div className="splash-sub-text">
          Take a quick survey to see if we can help.
        </div>
        <div className="survey-container">
          <Button
            buttonColor={COLORS.statusRed}
            buttonType="primary"
            style={{ minWidth: "4rem", userSelect: "none" }}
          >
            TAKE SURVEY
          </Button>
          <a className="survey-privacy-text">Privacy Policy</a>
        </div>
      </div>
    </div>
    <div className="section testimonies">
      <div className="testimony-container">
        <div className="testimony-title">{lorem(7)}</div>
        <div className="testimony-paragraph">{lorem(36)}</div>
      </div>
      <div className="testimony-title">{lorem(5)}</div>
      <PatternAttacher
        src={firstImage}
        svg={blob}
        x={"-3rem"}
        y={"-3rem"}
        height={"30rem"}
        color={"hsl(80,80%,70%)"}
      />
      <div className="testimony-container">
        <div className="testimony-title">{lorem(7)}</div>
        <div className="testimony-paragraph">{lorem(36)}</div>
      </div>
      <div className="testimony-title">{lorem(5)}</div>
      <PatternAttacher
        src={secondImage}
        svg={star}
        x={"3rem"}
        y={"-3rem"}
        height={"30rem"}
        color={"hsl(47,70%,65%)"}
      />
    </div>
    <div className="section pocket-guy">
      <div className="pre-gradient"></div>
      <div className="white-overlay-text">{lorem(7)}</div>
      <img src={thirdImage} className="fill-image" />
    </div>
    <div className="section callouts">
      <div className="callout-container">
        <Typography.Display>{lorem(2)}</Typography.Display>
        <Callout.Container>
          <Callout icon={<PlanIcon width={32} height={32} />}>
            <div className="callout-title">{lorem(4)}</div>
            <div className="callout-paragraph">{lorem(12)}</div>
          </Callout>
        </Callout.Container>
        <Callout.Container>
          <Callout icon={<GiftIcon width={32} height={32} />}>
            <div className="callout-title">{lorem(4)}</div>
            <div className="callout-paragraph">{lorem(12)}</div>
          </Callout>
        </Callout.Container>
        <Callout.Container>
          <Callout icon={<SmileIcon width={32} height={32} />}>
            <div className="callout-title">{lorem(4)}</div>
            <div className="callout-paragraph">{lorem(12)}</div>
          </Callout>
        </Callout.Container>
      </div>
    </div>
    <div className="section toast">
      <div className="pre-gradient"></div>
      <img src={fourthImage} />
      <div className="white-overlay-text">{lorem(7)}</div>
      <div className="toast-after">
        <div className="toast-text-container">
          <div className="toast-text-title">{lorem(4)}</div>
          <List items={new Array(4).fill(lorem(6))} />
          <div className="survey-container">
            <Button
              buttonColor={COLORS.statusRed}
              buttonType="primary"
              style={{ minWidth: "4rem", userSelect: "none" }}
            >
              TAKE SURVEY
            </Button>
            <a className="survey-privacy-text">Privacy Policy</a>
          </div>
        </div>
      </div>
    </div>
    {/*
    <Link to="/page-2/">Go to page 2</Link> <br /> */}
  </Layout>
)

export default IndexPage
