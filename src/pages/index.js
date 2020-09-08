import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Button } from "radiance-ui"
import { PlanIcon } from "radiance-ui/lib/icons"
import { Callout, Typography } from "radiance-ui"
import "../css/index.css"
import Pattern from "../components/pattern"
import blob from "../svg/blob.svg"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="splash">
      <img className="splash-image"></img>
    </div>
    <div className="layered-images">
      <Pattern
        img={blob}
        color={{
          hue: 0,
          saturation: 80,
          lightness: 70,
        }}
        params={{
          canvas_width: 485,
          canvas_height: 755,
          shape_scale: 5,
          x_gap: 2,
          y_gap: 2,
          coverage: 100,
          random_x_offset: 0,
          random_y_offset: 0,
          rotation_lower: -40,
          rotation_upper: 40,
        }}
      />
      <Pattern
        img={blob}
        color={{
          hue: 80,
          saturation: 80,
          lightness: 70,
        }}
        params={{
          canvas_width: 485,
          canvas_height: 755,
          shape_scale: 5,
          x_gap: 2,
          y_gap: 2,
          coverage: 100,
          random_x_offset: 0,
          random_y_offset: 0,
          rotation_lower: -40,
          rotation_upper: 40,
        }}
      />
      <img src="https://images.unsplash.com/photo-1570554520913-ce2192a74574?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80" />
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
