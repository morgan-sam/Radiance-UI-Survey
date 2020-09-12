import React from "react"
import { RadioButton } from "radiance-ui"
import { css } from "@emotion/core"

const QuestionFive = props => {
  const { data, setData } = props
  return (
    <div className="question">
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
    </div>
  )
}

export default QuestionFive
