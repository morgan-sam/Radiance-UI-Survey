import React from "react"
import { ImmersiveModal, Button } from "radiance-ui"
import { lorem } from "../js/lorem"

const modalHeaderImage =
  "https://images.unsplash.com/photo-1556228852-80b6e5eeff06?ixlib=rb-1.2.1&auto=format&fit=crop&w=1351&q=80"

const Survey = props => {
  const { surveyOpen, setSurveyOpen } = props
  return (
    <ImmersiveModal
      onClose={() => setSurveyOpen(false)}
      headerImage={<img src={modalHeaderImage} alt="header" />}
      footerContent={
        <Button.Container>
          <Button>Next Page</Button>
        </Button.Container>
      }
      title="Curology Survey"
    >
      <p>{lorem(40)}</p>
      <p>{lorem(40)}</p>
      <p>{lorem(40)}</p>
    </ImmersiveModal>
  )
}

export default Survey
