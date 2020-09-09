import React, { useEffect, useState, useRef } from "react"
import Pattern from "../components/pattern"
import blob from "../svg/blob.svg"

const PatternAttacher = props => {
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

  return (
    <div>
      {loadPattern && (
        <Pattern
          img={blob}
          color={{
            hue: 80,
            saturation: 80,
            lightness: 70,
          }}
          width={width}
          height={height}
          params={{
            shape_scale: 5,
            x_gap: 2,
            y_gap: 2,
            coverage: 100,
            random_x_offset: 0,
            random_y_offset: 0,
            rotation_lower: -40,
            rotation_upper: 40,
          }}
        />
      )}
      <img ref={imgRef} onLoad={() => setImgLoaded(true)} src={props.src} />
    </div>
  )
}

export default PatternAttacher
