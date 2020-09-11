import React from "react"
import "../css/list.css"

const List = props => {
  const { items } = props
  return (
    <ul className="list">
      {items.map(el => (
        <li className="list-item">{el}</li>
      ))}
    </ul>
  )
}

export default List
