import React from 'react'
import Select from 'react-select'
import { view } from 'react-easy-state'
import Slider, { Range } from 'rc-slider'
import { OPTIONS, DEFAULT_SCALE } from '../../consts'
import { immutableSplice } from '../../utils'
import ColorPicker from './ColorPicker'
import Store from '../../stores/Store'

const handleShapeChange = id => ({ value }) => {
  Store.ctors.find(d => d.id === id).shape = value
}

const handleScaleChange = id => ({ value }) => {
  Store.ctors.find(d => d.id === id).scale = value
}

const handleSendToTopClick = id => () => {
  Store.ctors = immutableSplice(
    Store.ctors.filter(ctor => ctor.id !== id),
    Store.ctors.length - 1,
    0,
    Store.ctors.find(ctor => ctor.id === id)
  )
}

const handleColorChange = id => ({ rgb }) => {
  Store.ctors.find(d => d.id === id).color = rgb
}

const handleAnimationSpeedChange = ({ target: { value } }) => {
  Store.animationSpeed = value
}

const Controls = () => {
  return (
    <div className="Controls">
      {Store.ctors.map(({ color, shape }, id) => (
        <div className="Controls__PerCtor">
          <ColorPicker color={color} onChange={handleColorChange(id)} />

          <button className="button button--send-to-top" onClick={handleSendToTopClick(id)}>
            Send to top
          </button>

          <div className="Select">
            <label>Scale: </label>
            <Select
              onChange={handleScaleChange(id)}
              options={OPTIONS.SCALES}
              defaultValue={DEFAULT_SCALE}
            />
          </div>
          <div className="Select">
            <label>Shape: </label>

            <Select
              onChange={handleShapeChange(id)}
              defaultValue={OPTIONS.SHAPES.find(ctor => ctor.value === shape)}
              options={OPTIONS.SHAPES}
            />
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
