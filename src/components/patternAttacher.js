import React, { useEffect, useState, useRef } from "react"
import Pattern from "../components/pattern"

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
    <div style={props.style}>
      <div style={containerStyle}>
        {loadPattern && (
          <Pattern
            style={patternStyle}
            img={svg}
            width={width}
            height={height}
            params={{
              color: props.color,
              shape_scale: 4.5,
              x_gap: 1.8,
              y_gap: 3,
              coverage: 100,
              random_x_offset: 30,
              random_y_offset: 60,
              rotation_lower: -180,
              rotation_upper: 180,
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
