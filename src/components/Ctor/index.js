import React from 'react'
import { view } from 'react-easy-state'
import styled, { css } from 'styled-components'

const positionStyles = position => {
  switch (position) {
    case 'top':
      return css`
        top: -20%;
        left: -20%;
      `
    case 'bottom':
      return css`
        top: 80%;
        left: 80%;
      `
    case 'left':
      return css`
        bottom: -20%;
        left: -20%;
      `
    case 'right':
      return css`
        bottom: 80%;
        left: 80%;
      `
    default:
      return css`
        top: -20%;
        left: -20%;
      `
  }
}

const triangleStyles = color => {
  const size = '2rem'
  return css`
    border-left: ${size} solid transparent;
    border-right: ${size} solid transparent;
    border-bottom: ${size} solid rgba(${color.r}, ${color.g}, ${color.b}, ${color.a});
    background-color: rgba(0, 0, 0, 0);
  `
}

const transformStyles = (scale, shape) => css`
  transform: scale(${scale}) ${shape === 'triangle' ? 'rotate(245deg) translateX(10%)' : ''};
`

const colorStyles = color =>
  color &&
  css`
    background-color: rgba(${color.r}, ${color.g}, ${color.b}, ${color.a});
  `

const circleStyles = () => css`
  border-radius: 50%;
`

const CtorStyles = styled.div`
  width: 40%;
  height: 40%;
  position: absolute;
  ${p => colorStyles(p.s.color)}
  ${p => transformStyles(p.s.scale, p.s.shape)}
  ${p => (p.s.shape === 'circle' ? circleStyles() : '')}
  ${p => (p.s.shape === 'triangle' ? triangleStyles(p.s.color) : '')}
  ${p => positionStyles(p.s.position)}
`

const Ctor = props => {
  // s = props for styles
  return <CtorStyles s={props} />
}

export default view(Ctor)
