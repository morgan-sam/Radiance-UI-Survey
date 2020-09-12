import React, { useState } from "react"
import { ImmersiveModal, Button, Dropdown, RadioButton } from "radiance-ui"
import { lorem } from "../js/lorem"
import { css } from "@emotion/core"
import "../css/survey.css"

const modalHeaderImage =
  "https://images.unsplash.com/photo-1556228852-80b6e5eeff06?ixlib=rb-1.2.1&auto=format&fit=crop&w=1351&q=80"

const Survey = props => {
  const [data, setData] = useState({
    acne: undefined,
    length: undefined,
  })
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
      <p>Question 1{data.acne === true ? "A" : null}:</p>
      <p>Are you currently struggling with acne?</p>
      <RadioButton
        type="primary"
        checked={data.acne === true}
        css={css`
          & > p:last-of-type {
            margin-bottom: 0;
          }
        `}
        onClick={() => setData({ ...data, acne: true })}
      >
        Yes
      </RadioButton>
      <RadioButton
        type="primary"
        checked={data.acne === false}
        css={css`
          & > p:last-of-type {
            margin-bottom: 0;
          }
        `}
        onClick={() => setData({ ...data, acne: false })}
      >
        No
      </RadioButton>
      {data.acne === true && [
        <p>Question 1B:</p>,
        <p>How long have you had acne for?</p>,
        <RadioButton
          type="primary"
          checked={data.length === 1}
          css={css`
            & > p:last-of-type {
              margin-bottom: 0;
            }
          `}
          onClick={() => setData({ ...data, length: 1 })}
        >
          Under 3 Months
        </RadioButton>,
        <RadioButton
          type="primary"
          checked={data.length === 2}
          css={css`
            & > p:last-of-type {
              margin-bottom: 0;
            }
          `}
          onClick={() => setData({ ...data, length: 2 })}
        >
          3 - 12 Months
        </RadioButton>,
        <RadioButton
          type="primary"
          checked={data.length === 3}
          css={css`
            & > p:last-of-type {
              margin-bottom: 0;
            }
          `}
          onClick={() => setData({ ...data, length: 3 })}
        >
          1 - 2 years
        </RadioButton>,
        <RadioButton
          type="primary"
          checked={data.length === 4}
          css={css`
            & > p:last-of-type {
              margin-bottom: 0;
            }
          `}
          onClick={() => setData({ ...data, length: 4 })}
        >
          2+ years
        </RadioButton>,
      ]}
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
