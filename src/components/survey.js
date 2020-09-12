import React from "react"
import { ImmersiveModal, Button, OptionButton, RadioButton } from "radiance-ui"
import { lorem } from "../js/lorem"
import { css } from "@emotion/core"

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
          <Button>Submit</Button>
        </Button.Container>
      }
      title="Curology Survey"
    >
      <p>
        Thank you for taking our survey. It will take approximately 2-3 minutes.
      </p>
      <p>Question 1:</p>
      <p>Are you currently struggling with acne?</p>
      <RadioButton
        type="primary"
        checked
        css={css`
          & > p:last-of-type {
            margin-bottom: 0;
          }
        `}
      >
        Yes
      </RadioButton>
      <RadioButton
        type="primary"
        checked
        css={css`
          & > p:last-of-type {
            margin-bottom: 0;
          }
        `}
      >
        No
      </RadioButton>
      <p>Question 2:</p>
      <p>{lorem(10)}?</p>
      <p>Question 3:</p>
      <p>{lorem(10)}?</p>
      <p>Question 4:</p>
      <p>{lorem(10)}?</p>
      <p>Question 5:</p>
      <p>{lorem(10)}?</p>
      <p>Question 6:</p>
      <p>{lorem(10)}?</p>
      <p>Question 7:</p>
      <p>{lorem(10)}?</p>
      <p>Question 8:</p>
      <p>{lorem(10)}?</p>
    </ImmersiveModal>
  )
}

export default Survey
