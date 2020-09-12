import React from "react"
import "../css/list.css"
import tick from "../svg/tick.svg"

const List = props => {
  const { items } = props
  return (
    <ul className="list">
      {items.map((el, i) => (
        <li key={i} className="list-item">
          <img src={tick} className="list-tick" />
          {el}
        </li>
      ))}
    </ul>
  )
}

export default List
