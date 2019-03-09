import React from 'react'
import PropTypes from 'prop-types'
import Store from 'stores/Store'
import { immutableSplice } from 'utils'

import { Group, GroupRow } from 'components/Styled/Groups'
import Button from 'components/Styled/Button'

import Checkbox from 'components/Controls/Checkbox'
import ColorPicker from 'components/Controls/ColorPicker'
import Slider from 'components/Controls/Slider'

import { SHAPES } from 'consts'

const handleShapeChange = id => value => {
  Store.shapes.find(d => d.id === id).shape = SHAPES[value]
}

const handleScaleChange = id => value => {
  Store.shapes.find(d => d.id === id).scale = value
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

const handleSendToTopClick = id => () => {
  Store.shapes = immutableSplice(
    Store.shapes.filter(ctor => ctor.id !== id),
    Store.shapes.length - 1,
    0,
    Store.shapes.find(ctor => ctor.id === id)
  )
}

const ControlsPerShape = ({ shapes, backgroundColor }) =>
  shapes.map((currentShape, id) => {
    const { color, shape, scale } = currentShape
    return (
      <Group key={id}>
        <GroupRow>
          <ColorPicker
            layerBetween={backgroundColor}
            color={color}
            whiteBg
            onChange={handleColorChange(id)}
          />
          <Button onClick={handleSendToTopClick(id)}>Send to top</Button>
        </GroupRow>
        <Slider
          label="Scale"
          step={0.1}
          onChange={handleScaleChange(id)}
          defaultValue={scale}
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
          checked={currentShape.fly}
        />
        <Checkbox
          name="pulse"
          label="Pulse"
          onChange={handlePulseChange(id)}
          id={id}
          checked={currentShape.pulse}
        />
      </Group>
    )
  })

ControlsPerShape.propTypes = {
  shapes: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  backgroundColor: PropTypes.shape({}).isRequired
}

export default ControlsPerShape
