import React from 'react'
import { view } from 'react-easy-state'
import styled from 'styled-components'
import {
  zIndexStyles,
  colorStyles,
  transformStyles,
  circleStyles,
  triangleStyles,
  positionStyles,
  animationStyles
} from './styles'

const ShapeStyled = styled.div`
  ${p => zIndexStyles(p.s)}
  ${p => colorStyles(p.s)}
  ${p => `transform: ${transformStyles(p.s)}`}
  ${p => p.s.shape === 'circle' && circleStyles()}
  ${p => p.s.shape === 'triangle' && triangleStyles(p.s)}
  ${p => positionStyles(p.s)}
  ${p => animationStyles(p.s)}
`

const Shape = props => {
  return <ShapeStyled className="Shape" s={props} />
}

export default view(Shape)
