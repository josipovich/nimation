import { css } from 'styled-components'
import { random } from 'lodash'
import { fly, pulse } from '../Shape/animations'

export const transformStyles = ({ scale, shape }) => `
  scale(${scale}) ${
  shape === 'triangle' ? 'rotate(245deg) translateX(10%)' : ''
};
`

export const positionStyles = ({ position }) => {
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

export const triangleStyles = ({ color }) => {
  const size = '2rem'
  return css`
    border-left: ${size} solid transparent;
    border-right: ${size} solid transparent;
    border-bottom: ${size} solid
      rgba(${color.r}, ${color.g}, ${color.b}, ${color.a});
    background-color: rgba(0, 0, 0, 0);
  `
}

export const colorStyles = ({ color }) =>
  color &&
  css`
    background-color: rgba(${color.r}, ${color.g}, ${color.b}, ${color.a});
  `

export const circleStyles = () => css`
  border-radius: 50%;
`

export const zIndexStyles = ({ order }) =>
  order &&
  css`
    z-index: ${order + 1};
  `

export const animationStyles = props => {
  const pulseSpeed = random(5, 20)
  const flySpeed = random(5, 20)
  return css`
    animation: ${pulse(props)} ${props.pulse ? pulseSpeed : '0'}s ease-in-out
        alternate infinite,
      ${fly(props)} ${props.fly ? flySpeed : '0'}s ease-in-out alternate
        infinite;
  `
}
