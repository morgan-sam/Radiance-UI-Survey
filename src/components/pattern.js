import React, { useEffect } from "react"
import { loadImage, drawPattern } from "../js/pattern"

const Pattern = props => {
  const { img, color, params } = props

  useEffect(
    () =>
      (async () => {
        const loadedImage = await loadImage(img)
        drawPattern(loadedImage, color, params)
      })(),
    [img]
  )

  return (
    <canvas
      id="myCanvas"
      className="canvas"
      width={params.canvas_width}
      height={params.canvas_height}
    />
  )
}

export default Pattern
