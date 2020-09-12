import React from "react"
import { RadioButton, Checkbox } from "radiance-ui"
import { css } from "@emotion/core"

const nonAcneIssues = ["Wrinkles", "Poor Texture", "Dark Circles", "Firmness"]

const QuestionFour = props => {
  const { data, setData } = props
  return (
    <div className="question">
      <div className="sub-question">
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
      </div>
      {data.nonAcne && (
        <div className="sub-question">
          <h3>Question 4B:</h3>
          <p>Please select all that apply:</p>
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
          </div>
        </div>
      )}
    </div>
  )
}

export default QuestionFour
