import React, { useEffect, useState, useRef } from "react"
import Pattern from "./Pattern"
import { default_pattern_params } from "../data/default"

const PatternAttacher = props => {
  const { x, y, svg } = props
  const imgHeight = props.height
  const imgWidth = props.width

  const imgRef = useRef(null)
  const [imgLoaded, setImgLoaded] = useState(false)
  const [loadPattern, setLoadPattern] = useState(false)
  const [width, setWidth] = useState(0)
  const [height, setHeight] = useState(0)

  useEffect(() => {
    setWidth(imgRef.current.clientWidth)
    setHeight(imgRef.current.clientHeight)
  }, [imgLoaded])

  useEffect(() => {
    if (width !== 0 && height !== 0) setLoadPattern(true)
  }, [width, height])

  const containerStyle = {
    position: "relative",
    width: `calc(${width}px + calc(${x.replace("-", "")}*2))`,
    height: `calc(${height}px + calc(${y.replace("-", "")}*2))`,
  }

  const xPos = parseInt(x) < 0
  const yPos = parseInt(y) < 0

  const imgStyle = {
    position: "absolute",
    width: imgWidth,
    height: imgHeight,
    top: "50%",
    left: "50%",
    transform: "translate(-50%,-50%)",
  }

  const patternStyle = {
    position: "absolute",
    top: yPos ? "0" : null,
    right: xPos ? null : "0",
    bottom: yPos ? null : "0",
    left: xPos ? "0" : null,
  }

  return (
    <div style={props.style} className={props.className}>
      <div style={containerStyle}>
        {loadPattern && (
          <Pattern
            style={patternStyle}
            img={svg}
            width={width}
            height={height}
            params={{
              color: props.color ? props.color : default_pattern_params.color,
              shape_scale: props.shape_scale
                ? props.shape_scale
                : default_pattern_params.shape_scale,
              x_gap: props.x_gap ? props.x_gap : default_pattern_params.x_gap,
              y_gap: props.y_gap ? props.y_gap : default_pattern_params.y_gap,
              coverage: props.coverage
                ? props.coverage
                : default_pattern_params.coverage,
              random_x_offset: props.random_x_offset
                ? props.random_x_offset
                : default_pattern_params.random_x_offset,
              random_y_offset: props.random_y_offset
                ? props.random_y_offset
                : default_pattern_params.random_y_offset,
              rotation_lower: props.rotation_lower
                ? props.rotation_lower
                : default_pattern_params.rotation_lower,
              rotation_upper: props.rotation_upper
                ? props.rotation_upper
                : default_pattern_params.rotation_upper,
              x_offset: props.x_offset
                ? props.x_offset
                : default_pattern_params.x_offset,
              y_offset: props.y_offset
                ? props.y_offset
                : default_pattern_params.y_offset,
            }}
          />
        )}
        <img
          style={imgStyle}
          ref={imgRef}
          onLoad={() => setImgLoaded(true)}
          src={props.src}
        />
      </div>
    </div>
  )
}

export default PatternAttacher
