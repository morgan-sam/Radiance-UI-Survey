import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { LinkButton, Button } from "radiance-ui"
import { PlanIcon } from "radiance-ui/lib/icons"
import { Callout, Typography } from "radiance-ui"
import "../css/index.css"
import PatternAttacher from "../components/patternAttacher"
import blob from "../svg/blob.svg"
import COLORS from "tinycolor2"

const imgURL =
  "https://images.unsplash.com/photo-1570554520913-ce2192a74574?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="splash">
      <img className="splash-image"></img>
      <div className="splash-text-container">
        <div className="splash-main-text">Need a check up?</div>
        <div className="splash-sub-text">
          Take a quick survey to see if we can help.
        </div>
        <div className="survey-container">
          <LinkButton
            buttonColor={COLORS.statusRed}
            buttonType="primary"
            style={{ minWidth: "4rem", userSelect: "none" }}
          >
            TAKE SURVEY
          </LinkButton>
          <a className="survey-privacy-text">Privacy Policy</a>
        </div>
      </div>
    </div>
    <div className="explanation-box">
      <PatternAttacher
        src={imgURL}
        x={"3rem"}
        y={"3rem"}
        width={"80vw"}
        style={{ margin: "5rem" }}
      />
    </div>
    {/* <div className="survey-box">
      <Typography.Display>Display</Typography.Display>
      <Callout.Container>
        <Callout icon={<PlanIcon width={32} height={32} />}>
          <strong>How is your skin?</strong>
          <br />
          Take our survey to see if you could do with any help
        </Callout>
      </Callout.Container>
      <Button.Container>
        <Button>Primary Button</Button>
      </Button.Container>
    </div>
    <Link to="/page-2/">Go to page 2</Link> <br /> */}
  </Layout>
)

export default IndexPage
