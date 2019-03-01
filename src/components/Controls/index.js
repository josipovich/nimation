import React from 'react'
import Select from 'react-select'
import { view } from 'react-easy-state'
import styled, { css } from 'styled-components'
import Slider, { Range } from 'rc-slider'
import ColorPicker from './ColorPicker'

import { OPTIONS, DEFAULT_ANIMATION_SPEED } from '../../consts'
import { immutableSplice } from '../../utils'
import Store from '../../stores/Store'
import 'rc-slider/assets/index.css'

const ControlsStyled = styled.div`
  position: fixed;
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 1rem;
  background: rgba(0, 0, 0, 0.5);
`

const SliderWrapper = styled.div`
  width: 8rem;
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  margin-bottom: 0.5rem;
`

const Group = styled.div`
  display: flex;
  flex-direction: column;
`

const Button = styled.button`
  padding: 0.3rem;
  vertical-align: top;
  border: 1px solid #fff;
  height: 2rem;
  background: transparent;
  color: #fff;
  font-family: 'Noto Sans KR', sans-serif;
  font-size: 12px;
  margin-bottom: 0.5rem;
`

const Checkbox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 0.5rem;
`

const Label = styled.label`
  margin-right: 1rem;
`

const handleShapeChange = id => value => {
  Store.ctors.find(d => d.id === id).shape = OPTIONS.SHAPES[value]
}

const handleScaleChange = id => value => {
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

const handleAnimationSpeedChange = value => {
  Store.animationSpeed = 1 + (value - 0.5)
}

const handleBackgroundColor = ({ rgb }) => {
  Store.backgroundColor = rgb
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
        <Group>
          <ColorPicker color={color} onChange={handleColorChange(id)} />

          <Button onClick={handleSendToTopClick(id)}>Send to top</Button>

          <SliderWrapper>
            <Label>Scale: </Label>
            <Slider step={0.1} onChange={handleScaleChange(id)} defaultValue={1} min={0} max={20} />
          </SliderWrapper>

          <SliderWrapper>
            <Label>Shape: </Label>

            <Slider
              step={1}
              onChange={handleShapeChange(id)}
              defaultValue={OPTIONS.SHAPES.indexOf(shape)}
              min={0}
              max={2}
            />
          </SliderWrapper>

          <Checkbox>
            <Label>Fly: </Label>
            <input name="fly" type="checkbox" onChange={handleFlyChange(id)} defaultChecked />
          </Checkbox>
          <Checkbox>
            <Label>Pulse: </Label>
            <input name="pulse" type="checkbox" onChange={handlePulseChange(id)} defaultChecked />
          </Checkbox>
        </Group>
      ))}

      <Group>
        <Label> Background color: </Label>
        <ColorPicker color={Store.backgroundColor} onChange={handleBackgroundColor} />
      </Group>

      <Group>
        <Label> Animation speed: </Label>
        <Slider
          step={0.01}
          onChange={handleAnimationSpeedChange}
          defaultValue={DEFAULT_ANIMATION_SPEED - 1}
          min={-0.5}
          max={0}
        />
        {/* <input name="animation-speed" type="text" onChange={handleAnimationSpeedChange} /> */}
      </Group>
    </ControlsStyled>
  )
}

export default view(Controls)
