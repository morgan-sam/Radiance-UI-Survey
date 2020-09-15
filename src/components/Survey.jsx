import React, { useState } from "react"
import { ImmersiveModal, Button, Field } from "radiance-ui"
import QuestionOne from "./questions/question1"
import QuestionTwo from "./questions/question2"
import QuestionThree from "./questions/question3"
import QuestionFour from "./questions/question4"
import QuestionFive from "./questions/question5"
import "../css/survey.css"

const modalHeaderImage =
  "https://images.unsplash.com/photo-1556228852-80b6e5eeff06?ixlib=rb-1.2.1&auto=format&fit=crop&w=1351&q=80"

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
  const { setSurveyOpen, setThankYou } = props

  return (
    <ImmersiveModal
      onClose={() => setSurveyOpen(false)}
      headerImage={<img src={modalHeaderImage} alt="header" />}
      footerContent={
        <div className="survey-footer">
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
          <Button.Container>
            <Button
              className="btn"
              onClick={() => {
                setSurveyOpen(false)
                setThankYou(true)
                console.log("yo")
              }}
            >
              Submit
            </Button>
          </Button.Container>
        </div>
      }
      title="Curology Survey"
    >
      <p>
        Thank you for taking our survey. It will take approximately 2-3 minutes.
      </p>
      <QuestionOne {...{ data, setData }} />
      <QuestionTwo {...{ data, setData }} />
      <QuestionThree {...{ data, setData }} />
      <QuestionFour {...{ data, setData }} />
      <QuestionFive {...{ data, setData }} />
    </ImmersiveModal>
  )
}

export default Survey
