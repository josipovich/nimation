import React from 'react'
import Select from 'react-select'
import { view } from 'react-easy-state'
import Slider, { Range } from 'rc-slider'
import { OPTIONS } from '../../consts'
import ColorPicker from './ColorPicker'
import Store from '../../stores/Store'
import styled from 'styled-components'

const handleShapeChange = id => scale => {
  Store.ctors[id].shape = scale.value
}

const test = styled.p`
  color: red;
`

const handleScaleChange = id => scale => {
  Store.ctors[id].scale = scale.label
}

const handleColorChange = id => color => {
  Store.ctors[id].color = color.rgb
}

const handleAnimationSpeedChange = e => {
  Store.animationSpeed = e.target.value
}

const Controls = () => {
  return (
    <div className="Controls">
      {Store.ctors.map(({ color, id }) => (
        <div className="Controls__PerCtor">
          <ColorPicker color={color} onChange={handleColorChange(id)} />
          <div className="Select">
            <Select onChange={handleScaleChange(id)} placeholder="Scale" options={OPTIONS.SCALES} />
          </div>
          <div className="Select">
            <Select onChange={handleShapeChange(id)} placeholder="Shape" options={OPTIONS.SHAPES} />
          </div>
        </div>
      ))}
      <input name="animation-speed" type="text" onChange={handleAnimationSpeedChange} />
      <Slider />
      <Range />
    </div>
  )
}

export default view(Controls)
