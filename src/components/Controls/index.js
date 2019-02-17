import React from 'react'
import Select from 'react-select'
import { view } from 'react-easy-state'
import styled from 'styled-components'
import Slider, { Range } from 'rc-slider'
import ColorPicker from './ColorPicker'

import { OPTIONS, DEFAULT_SCALE } from '../../consts'
import { immutableSplice } from '../../utils'
import Store from '../../stores/Store'

const ControlsStyled = styled.div`
  position: fixed;
  width: 200px;
  padding: 1rem;
`

const SelectStyled = styled.div`
  margin-bottom: 0.5rem;
`

const ControlsPerCtorStyled = styled.div`
  margin-bottom: 2rem;
`

const ButtonStyled = styled.button`
  padding: 0.3rem;
  vertical-align: top;
  margin-left: 1rem;
  border: 1px solid #ccc;
  border-radius: 2px;
`

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

const handleFlyChange = id => e => {
  Store.ctors.find(d => d.id === id).fly = e.target.checked
}

const handlePulseChange = id => e => {
  Store.ctors.find(d => d.id === id).pulse = e.target.checked
}

const Controls = () => {
  return (
    <ControlsStyled>
      {Store.ctors.map(({ color, shape }, id) => (
        <ControlsPerCtorStyled>
          <ColorPicker color={color} onChange={handleColorChange(id)} />

          <ButtonStyled onClick={handleSendToTopClick(id)}>Send to top</ButtonStyled>

          <SelectStyled>
            <label>Scale: </label>
            <Select
              onChange={handleScaleChange(id)}
              options={OPTIONS.SCALES}
              defaultValue={DEFAULT_SCALE}
            />
          </SelectStyled>

          <SelectStyled>
            <label>Shape: </label>

            <Select
              onChange={handleShapeChange(id)}
              defaultValue={OPTIONS.SHAPES.find(ctor => ctor.value === shape)}
              options={OPTIONS.SHAPES}
            />
          </SelectStyled>

          <label>Fly: </label>
          <input name="fly" type="checkbox" onChange={handleFlyChange(id)} defaultChecked />
          <label>Pulse: </label>
          <input name="pulse" type="checkbox" onChange={handlePulseChange(id)} defaultChecked />
        </ControlsPerCtorStyled>
      ))}

      <input name="animation-speed" type="text" onChange={handleAnimationSpeedChange} />
      <Slider />
      <Range />
    </ControlsStyled>
  )
}

export default view(Controls)
