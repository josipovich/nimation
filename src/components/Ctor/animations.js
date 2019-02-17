import { keyframes } from 'styled-components'
import { transformStyles } from './styles'

export const pulse = ({ scale = 1 }) => keyframes`
  0% {
    transform: scale(${scale});
  }
  100% {
    transform: scale(${scale * 2.5});
  }
  `

export const fly = ({ position }) => {
  const max = 80
  const min = -20
  switch (position) {
    case 'top':
      return keyframes`
      0% {
        top: ${min}%;
        left: ${min}%;
      }
      100% {
        top: ${max * 2}%;
        left: ${max * 2}%;
      }
    `
    case 'bottom':
      return keyframes`
      0% {
        top: ${max}%;
        left: ${max}%;
      }
      100% {
        top: ${min * 2}%;
        left: ${min * 2}%;
      }
    `
    case 'left':
      return keyframes`
      0% {
        bottom: ${min}%;
        left: ${min}%;
      }
      100% {
        bottom: ${max * 2}%;
        left: ${max * 2}%;
      }
    `
    case 'right':
      return keyframes`
      0% {
        bottom: ${max}%;
        left: ${max}%;
      }
      100% {
        bottom: ${min * 2}%;
        left: ${min * 2}%;
      }
    `
    default:
      return keyframes`
      0% {
        top: ${min}%;
        left: ${min}%;
      }
      100% {
        top: ${max * 2}%;
        left: ${max * 2}%;
      }
    `
  }
}
