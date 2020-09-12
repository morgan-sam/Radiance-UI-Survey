import React from "react"
import { Checkbox } from "radiance-ui"

const makeupItems = [
  "Primer",
  "Foundation",
  "BB Cream",
  "Concealer",
  "Blush",
  "Highlighter",
  "Bronzer",
  "Setting Spray",
]

const QuestionTwo = props => {
  const { data, setData } = props
  return (
    <div className="question">
      <h3>Question 2:</h3>
      <p>Please select the makeup items you use in your daily routine:</p>
      <div className="multiple-choice-container">
        {makeupItems.map(option => (
          <div className="multiple-choice">
            <span key={`label_${option}`} className="multiple-choice-label">
              {option}
            </span>
            <Checkbox
              type="primary"
              style={{ marginBottom: "0" }}
              checked={data.makeup.includes(option)}
              onClick={() => {
                if (data.makeup.includes(option)) {
                  const filteredList = data.makeup.filter(el => el !== option)
                  setData({ ...data, makeup: filteredList })
                } else setData({ ...data, makeup: [...data.makeup, option] })
              }}
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default QuestionTwo
