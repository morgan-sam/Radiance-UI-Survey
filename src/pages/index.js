import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import COLORS from "tinycolor2"
import { LinkButton, Button } from "radiance-ui"
import { PlanIcon } from "radiance-ui/lib/icons"
import { Callout, Typography } from "radiance-ui"

import "../css/index.css"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="splash">
      <img className="splash-image"></img>
    </div>
    <div className="layered-images">
      <img src="https://images.unsplash.com/photo-1571781926291-c477ebfd024b?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80" />
      <img src="https://images.unsplash.com/photo-1556229162-5c63ed9c4efb?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80" />
    </div>
    <div className="survey-box">
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
    <Link to="/page-2/">Go to page 2</Link> <br />
  </Layout>
)

export default IndexPage
