import React, { useState } from "react"
import Layout from "../components/Layout"
import SEO from "../components/SEO"

import { Button, Callout, Typography } from "radiance-ui"
import { PlanIcon, GiftIcon, SmileIcon } from "radiance-ui/lib/icons"

import COLORS from "tinycolor2"

import "../css/index.css"
import "../css/index-tablet.css"
import "../css/index-desktop.css"

import PatternAttacher from "../components/PatternAttacher"
import List from "../components/List"
import Survey from "../components/Survey"
import ThankYou from "../components/ThankYou"

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
  "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"

const IndexPage = () => {
  const [surveyOpen, setSurveyOpen] = useState(false)
  const [thankYou, setThankYou] = useState(false)

  return (
    <Layout>
      <SEO title="Home" />
      {surveyOpen && <Survey {...{ setSurveyOpen, setThankYou }} />}
      {thankYou && <ThankYou {...{ setThankYou }} />}
      <div className="section splash">
        <img className="splash-image" alt="" />
        <div className="splash-text-container">
          <div className="splash-main-text">Need a check up?</div>
          <div className="splash-sub-text">
            Take a quick survey to see if we can help.
          </div>
          <div className="survey-container">
            <Button
              className="btn"
              buttonColor={COLORS.statusRed}
              buttonType="primary"
              onClick={() => setSurveyOpen(true)}
              style={{ minWidth: "4rem", userSelect: "none" }}
            >
              TAKE SURVEY
            </Button>
            <a
              className="survey-privacy-text"
              href="https://curology.com/privacy/"
            >
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
      <div className="section testimonies">
        <div className="testimony">
          <div className="testimony-text-container">
            <div className="testimony-title">{lorem(7)}</div>
            <div className="testimony-paragraph">{lorem(36)}</div>
          </div>
          <div className="testimony-labelled-image">
            <div className="testimony-title">{lorem(5)}</div>
            <PatternAttacher
              className="testimony-image"
              src={firstImage}
              svg={blob}
              x={"-3rem"}
              y={"-3rem"}
              height={"30rem"}
              color={"hsl(80,80%,70%)"}
              x_offset={-6}
              random_x_offset={20}
              random_y_offset={30}
              shape_scale={6}
            />
          </div>
        </div>
        <div className="testimony">
          <div className="testimony-text-container">
            <div className="testimony-title">{lorem(7)}</div>
            <div className="testimony-paragraph">{lorem(36)}</div>
          </div>
          <div className="testimony-labelled-image">
            <div className="testimony-title">{lorem(5)}</div>
            <PatternAttacher
              className="testimony-image"
              src={secondImage}
              svg={star}
              x={"3rem"}
              y={"-3rem"}
              height={"30rem"}
              color={"hsl(47,70%,65%)"}
              shape_scale={9}
              x_gap={2}
            />
          </div>
        </div>
      </div>
      <div className="section pocket-guy">
        <div className="pre-gradient"></div>
        <div className="white-overlay-text">{lorem(7)}</div>
        <img src={thirdImage} className="fill-image" alt="" />
      </div>
      <div className="section callouts">
        <Typography.Display>{lorem(2)}</Typography.Display>
        <div className="callout-container">
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
      <div className="section call-to-action">
        <div className="pre-gradient"></div>
        <img src={fourthImage} className="fill-image" alt="" />
        <div className="white-overlay-text">{lorem(7)}</div>
        <div className="call-to-action-after">
          <div className="call-to-action-text-container">
            <div className="call-to-action-text-title">{lorem(4)}</div>
            <List items={new Array(4).fill(lorem(6))} />
            <div className="survey-container">
              <Button
                className="btn"
                buttonColor={COLORS.statusRed}
                buttonType="primary"
                onClick={() => setSurveyOpen(true)}
                style={{ minWidth: "4rem", userSelect: "none" }}
              >
                TAKE SURVEY
              </Button>
              <a
                className="survey-privacy-text"
                href="https://curology.com/privacy/"
              >
                Privacy Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default IndexPage
