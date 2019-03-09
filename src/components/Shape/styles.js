import { css } from 'styled-components'
import { fly, pulse } from 'components/Shape/animations'

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
    z-index: ${order};
  `

export const animationStyles = props => css`
  animation: ${pulse(props)} ${props.pulse ? '5' : '0'}s ease-in-out alternate
      infinite,
    ${fly(props)} ${props.fly ? '2' : '0'}s ease-in-out alternate infinite;
`
