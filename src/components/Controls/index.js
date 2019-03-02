import React from 'react'
import { view } from 'react-easy-state'
import Slider from 'rc-slider'
import ColorPicker from './ColorPicker'
import Preview from './Preview'
import { OPTIONS, DEFAULT_ANIMATION_SPEED } from '../../consts'
import { immutableSplice } from '../../utils'
import Store from '../../stores/Store'
import 'rc-slider/assets/index.css'

const handleShapeChange = id => value => {
  Store.shapes.find(d => d.id === id).shape = OPTIONS.SHAPES[value]
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

const handleAnimationSpeedChange = value => {
  Store.animationSpeed = 1 + (value - 0.5)
}

const handleBackgroundColor = ({ rgb }) => {
  Store.backgroundColor = rgb
}

const handleFlyChange = id => e => {
  Store.shapes.find(d => d.id === id).fly = e.target.checked
}

const handlePulseChange = id => e => {
  Store.shapes.find(d => d.id === id).pulse = e.target.checked
}

const Controls = () => {
  return (
    <div className="Controls">
      <div className="Group Group--background-color">
        <label className="Label"> Background </label>
        <ColorPicker color={Store.backgroundColor} onChange={handleBackgroundColor} />
      </div>

      <div className="Group Group--animation-speed">
        <label className="Label"> Speed </label>
        <Slider
          step={0.001}
          onChange={handleAnimationSpeedChange}
          defaultValue={DEFAULT_ANIMATION_SPEED - 1}
          min={-0.5}
          max={0}
        />
      </div>

      {Store.shapes.map((currentShape, id) => {
        const { color, shape } = currentShape
        return (
          <div className="Group">
            <ColorPicker color={color} onChange={handleColorChange(id)} />

            <button className="Button" onClick={handleSendToTopClick(id)}>
              Send to top
            </button>

            <div className="Slider">
              <label className="Label">Scale </label>
              <Slider
                step={0.1}
                onChange={handleScaleChange(id)}
                defaultValue={1}
                min={0}
                max={20}
              />
            </div>

            <div className="Slider">
              <label className="Label">Shape </label>
              <Slider
                step={1}
                onChange={handleShapeChange(id)}
                defaultValue={OPTIONS.SHAPES.indexOf(shape)}
                min={0}
                max={2}
              />
            </div>

            <div className="Checkbox">
              <label className="Label">Fly </label>

              <input name="fly" type="checkbox" onChange={handleFlyChange(id)} defaultChecked />
            </div>
            <div className="Checkbox">
              <label className="Label">Pulse </label>
              <input name="pulse" type="checkbox" onChange={handlePulseChange(id)} defaultChecked />
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default view(Controls)
