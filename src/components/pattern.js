import React, { useEffect, useRef } from "react"
import { loadImage, drawPattern } from "../js/pattern"

const Pattern = props => {
  const patternRef = useRef(null)
  const { img, color, params } = props

  const getContext = () => patternRef.current.getContext("2d")

  useEffect(
    () =>
      (async () => {
        const loadedImage = await loadImage(img)
        drawPattern(loadedImage, color, params, getContext)
      })(),
    [img]
  )

  return (
    <canvas
      ref={patternRef}
      className="canvas"
      width={params.canvas_width}
      height={params.canvas_height}
    />
  )
}

export default Pattern
