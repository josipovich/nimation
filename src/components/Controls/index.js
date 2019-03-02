import React, { Fragment } from 'react'
import { view } from 'react-easy-state'
import ColorPicker from './ColorPicker'
import Checkbox from './Checkbox'
import Slider from './Slider'

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
    <Fragment>
      <div className="Controls Controls--top">
        <div className="Content">
          {Store.shapes.map((currentShape, id) => {
            const { color, shape } = currentShape
            return (
              <div key={id} className="Group">
                <div className="Group__row">
                  <ColorPicker color={color} onChange={handleColorChange(id)} />
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
                  defaultValue={OPTIONS.SHAPES.indexOf(shape)}
                  min={0}
                  max={2}
                />
                <Checkbox name="fly" label="Fly" onChange={handleFlyChange(id)} id={id} />
                <Checkbox name="pulse" label="Pulse" onChange={handlePulseChange(id)} id={id} />
              </div>
            )
          })}
        </div>
      </div>

      <div className="Controls Controls--bottom">
        <div className="Content">
          <div className="Group Group--background-color">
            {/* <label className="Label"> Background </label> */}
            <ColorPicker
              directionTop
              width="2rem"
              color={Store.backgroundColor}
              onChange={handleBackgroundColor}
            />
          </div>

          <div className="Group Group--animation-speed">
            {/* <label className="Label"> Speed </label> */}
            <Slider
              step={0.001}
              onChange={handleAnimationSpeedChange}
              defaultValue={DEFAULT_ANIMATION_SPEED - 1}
              min={-0.5}
              max={0}
            />
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default view(Controls)
