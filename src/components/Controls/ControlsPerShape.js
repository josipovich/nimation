import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Store from '../../stores/Store'
import { immutableSplice } from '../../utils'
import { SHAPES } from '../../consts'
import Checkbox from './Checkbox'
import ColorPicker from './ColorPicker'
import Slider from './Slider'

const handleShapeChange = id => value => {
  Store.shapes.find(d => d.id === id).shape = SHAPES[value]
}

const handleScaleChange = id => value => {
  Store.shapes.find(d => d.id === id).scale = value
}

const handleSendToTopClick = id => () => {
  Store.shapes = immutableSplice(
    Store.shapes.filter(ctor => ctor.id !== id),
    Store.shapes.length - 1,
    0,
    Store.shapes.find(ctor => ctor.id === id)
  )
}

const handleColorChange = id => ({ rgb }) => {
  Store.shapes.find(d => d.id === id).color = rgb
}

const handleFlyChange = id => e => {
  Store.shapes.find(d => d.id === id).fly = e.target.checked
}

const handlePulseChange = id => e => {
  Store.shapes.find(d => d.id === id).pulse = e.target.checked
}

const ControlsPerShape = ({ shapes }) =>
  shapes.map((currentShape, id) => {
    const { color, shape } = currentShape
    return (
      <div key={id} className="Group">
        <div className="Group__row">
          <ColorPicker
            layerBetween={Store.backgroundColor}
            color={color}
            whiteBg
            onChange={handleColorChange(id)}
          />
          <button className="Button" onClick={handleSendToTopClick(id)}>
            Send to top
          </button>
        </div>
        <Slider
          label="Scale"
          step={0.1}
          onChange={handleScaleChange(id)}
          defaultValue={1}
          min={0}
          max={20}
        />
        <Slider
          label="Shape"
          step={1}
          onChange={handleShapeChange(id)}
          defaultValue={SHAPES.indexOf(shape)}
          min={0}
          max={2}
        />
        <Checkbox
          name="fly"
          label="Fly"
          onChange={handleFlyChange(id)}
          id={id}
          checked={Store.shapes[id].fly}
        />
        <Checkbox
          name="pulse"
          label="Pulse"
          onChange={handlePulseChange(id)}
          id={id}
          checked={Store.shapes[id].pulse}
        />
      </div>
    )
  })

ControlsPerShape.propTypes = {
  shapes: PropTypes.shape({}).isRequired
}

export default ControlsPerShape
