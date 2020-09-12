import React from "react"
import { DialogModal, Button } from "radiance-ui"

const ThankYou = props => {
  const { setThankYou } = props
  return (
    <DialogModal
      title="Thank you for taking our survey!"
      style={{ height: "100vh", textAlign: "center" }}
    >
      <p>Check your email for your new skincare routine.</p>
      <Button.Container>
        <Button onClick={() => setThankYou(false)}>Ok</Button>
      </Button.Container>
    </DialogModal>
  )
}

export default ThankYou
