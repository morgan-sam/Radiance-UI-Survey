import React, { useEffect, useRef } from "react"
import { loadImage, drawPattern } from "../js/pattern"

const Pattern = props => {
  const patternRef = useRef(null)
  const { img, width, height, style } = props

  const getContext = () => patternRef.current.getContext("2d")

  useEffect(() => {
    const loadData = async () => {
      const params = {
        ...props.params,
        canvas_width: width,
        canvas_height: height,
      }
      const loadedImage = await loadImage(img)
      drawPattern(loadedImage, params, getContext)
    }

    if (height !== 0 && width !== 0) loadData()
  }, [img])

  return (
    <canvas
      ref={patternRef}
      className="canvas"
      style={style}
      width={width}
      height={height}
    />
  )
}

export default Pattern
