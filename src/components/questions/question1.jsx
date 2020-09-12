import React from "react"
import { RadioButton, Checkbox } from "radiance-ui"
import { css } from "@emotion/core"

const acneSymptoms = ["Zits", "Clogged Pores", "Dark Spots", "Redness"]

const QuestionOne = props => {
  const { data, setData } = props
  return (
    <div className="question">
      <div className="sub-question">
        <h3>Question 1{data.acne === true ? "A" : null}:</h3>
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
      </div>

      {data.acne === true && (
        <div className="sub-question">
          <h3>Question 1B:</h3>
          <p>How long have you had acne for?</p>
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
          </RadioButton>
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
          </RadioButton>
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
          </RadioButton>
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
          </RadioButton>
        </div>
      )}

      {data.acne === true && (
        <div className="sub-question">
          <h3>Question 1C:</h3>
          <p>Please select the symptoms you have:</p>
          <div className="multiple-choice-container">
            {acneSymptoms.map(option => (
              <div className="multiple-choice">
                <span key={`label_${option}`} className="multiple-choice-label">
                  {option}
                </span>
                <Checkbox
                  key={`checkbox_${option}`}
                  type="primary"
                  style={{ marginBottom: "0" }}
                  checked={data.symptoms.includes(option)}
                  onClick={() => {
                    if (data.symptoms.includes(option)) {
                      const filteredList = data.symptoms.filter(
                        el => el !== option
                      )
                      setData({ ...data, symptoms: filteredList })
                    } else
                      setData({ ...data, symptoms: [...data.symptoms, option] })
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export default QuestionOne
