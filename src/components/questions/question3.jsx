import React from "react"
import { RadioButton, OptionButton } from "radiance-ui"
import { ThumbsUpIcon, MinusIcon, ThumbsDownIcon } from "radiance-ui/lib/icons"
import { css } from "@emotion/core"

const QuestionThree = props => {
  const { data, setData } = props
  return (
    <div className="question">
      <div className="sub-question">
        <h3>Question 3{data.previous ? "A" : null}:</h3>
        <p>Have you previously had any skincare treatment?</p>
        <RadioButton
          type="primary"
          checked={data.previous === true}
          css={css`
            & > p:last-of-type {
              margin-bottom: 0;
            }
          `}
          onClick={() => setData({ ...data, previous: true })}
        >
          Yes
        </RadioButton>
        <RadioButton
          type="primary"
          checked={data.previous === false}
          css={css`
            & > p:last-of-type {
              margin-bottom: 0;
            }
          `}
          onClick={() => setData({ ...data, previous: false })}
        >
          No
        </RadioButton>
      </div>
      {data.previous && (
        <div className="sub-question">
          <h3>Question 3B:</h3>
          <p>Did your symptoms improve or worsen?</p>
          <OptionButton
            selected={data.previousResult === "improvement"}
            text="Symptoms Improved"
            subtext="Reduction in acne, redness, zits, clogged pores, etc."
            onClick={() => setData({ ...data, previousResult: "improvement" })}
            optionType="radio"
            buttonType="primary"
            icon={<ThumbsUpIcon />}
          />
          <OptionButton
            selected={data.previousResult === "no change"}
            text="No Change"
            subtext="No change in amount of acne, redness, zits, clogged pores, etc."
            onClick={() => setData({ ...data, previousResult: "no change" })}
            optionType="radio"
            buttonType="primary"
            icon={<MinusIcon />}
          />
          <OptionButton
            selected={data.previousResult === "worsened"}
            text="Symptoms Worsened"
            subtext="Increase in acne, redness, zits, clogged pores, etc."
            onClick={() => setData({ ...data, previousResult: "worsened" })}
            optionType="radio"
            buttonType="primary"
            icon={<ThumbsDownIcon />}
          />
        </div>
      )}
    </div>
  )
}

export default QuestionThree
