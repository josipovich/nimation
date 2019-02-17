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
  switch (position) {
    case 'top':
      return keyframes`
      0% {
        top: -20%;
        left: -20%;
      }
      100% {
        top: 80%;
        left: 80%;
      }
    `
    case 'bottom':
      return keyframes`
      0% {
        top: 80%;
        left: 80%;
      }
      100% {
        top: -20%;
        left: -20%;
      }
    `
    case 'left':
      return keyframes`
      0% {
        bottom: -20%;
        left: -20%;
      }
      100% {
        bottom: 80%;
        left: 80%;
      }
    `
    case 'right':
      return keyframes`
      0% {
        bottom: 80%;
        left: 80%;
      }
      100% {
        bottom: -20%;
        left: -20%;
      }
    `
    default:
      return keyframes`
      0% {
        top: -20%;
        left: -20%;
      }
      100% {
        top: 80%;
        left: 80%;
      }
    `
  }
}
