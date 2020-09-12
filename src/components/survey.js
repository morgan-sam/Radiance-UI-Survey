import React, { useState } from "react"
import {
  ImmersiveModal,
  Button,
  OptionButton,
  RadioButton,
  Checkbox,
  Field,
} from "radiance-ui"
import QuestionOne from "./questions/question1"
import QuestionTwo from "./questions/question2"
import QuestionThree from "./questions/question3"
import { lorem } from "../js/lorem"
import { css } from "@emotion/core"
import "../css/survey.css"

const modalHeaderImage =
  "https://images.unsplash.com/photo-1556228852-80b6e5eeff06?ixlib=rb-1.2.1&auto=format&fit=crop&w=1351&q=80"

const nonAcneIssues = ["Wrinkles", "Poor Texture", "Dark Circles", "Firmness"]

const Survey = props => {
  const [data, setData] = useState({
    acne: undefined,
    length: undefined,
    symptoms: [],
    makeup: [],
    previous: undefined,
    previousResult: undefined,
    nonAcne: undefined,
    nonAcneIssues: [],
    seeking: undefined,
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
      <QuestionOne {...{ data, setData }} />
      <QuestionTwo {...{ data, setData }} />
      <QuestionThree {...{ data, setData }} />
      <h3>Question 4{data.nonAcne ? "A" : null}:</h3>
      <p>Do you have any non acne skin issues?</p>
      <RadioButton
        type="primary"
        checked={data.nonAcne === true}
        css={css`
          & > p:last-of-type {
            margin-bottom: 0;
          }
        `}
        onClick={() => setData({ ...data, nonAcne: true })}
      >
        Yes
      </RadioButton>
      <RadioButton
        type="primary"
        checked={data.nonAcne === false}
        css={css`
          & > p:last-of-type {
            margin-bottom: 0;
          }
        `}
        onClick={() => setData({ ...data, nonAcne: false })}
      >
        No
      </RadioButton>
      {data.nonAcne && [
        <h3>Question 4B:</h3>,
        <p>Please select all that apply:</p>,
        <div className="multiple-choice-container">
          {nonAcneIssues.map(option => (
            <div className="multiple-choice">
              <span key={`label_${option}`} className="multiple-choice-label">
                {option}
              </span>
              <Checkbox
                key={`checkbox_${option}`}
                type="primary"
                style={{ marginBottom: "0" }}
                checked={data.nonAcneIssues.includes(option)}
                onClick={() => {
                  if (data.nonAcneIssues.includes(option)) {
                    const filteredList = data.nonAcneIssues.filter(
                      el => el !== option
                    )
                    setData({ ...data, nonAcneIssues: filteredList })
                  } else
                    setData({
                      ...data,
                      nonAcneIssues: [...data.nonAcneIssues, option],
                    })
                }}
              />
            </div>
          ))}
        </div>,
      ]}
      <h3>Question 5:</h3>
      <p>Are you currently seeking skincare treatment?</p>
      <RadioButton
        type="primary"
        checked={data.seeking === true}
        css={css`
          & > p:last-of-type {
            margin-bottom: 0;
          }
        `}
        onClick={() => setData({ ...data, seeking: true })}
      >
        Yes
      </RadioButton>
      <RadioButton
        type="primary"
        checked={data.seeking === false}
        css={css`
          & > p:last-of-type {
            margin-bottom: 0;
          }
        `}
        onClick={() => setData({ ...data, seeking: false })}
      >
        No
      </RadioButton>
      <p>Please enter a valid email address:</p>
      <Field labelFor="input-hint">
        <Field.Input
          id="input-hint"
          type="text"
          placeholder="Email Address"
          style={{
            padding: "1rem 0",
            textIndent: "1rem",
          }}
        />
      </Field>
    </ImmersiveModal>
  )
}

export default Survey
