import { random } from 'lodash'
import { SHAPES } from './consts'

export const immutableSplice = (arr, start, deleteCount, ...items) => [
  ...arr.slice(0, start),
  ...items,
  ...arr.slice(start + deleteCount)
]

export const generateRgba = () => ({
  r: random(0, 255),
  g: random(0, 255),
  b: random(0, 255),
  a: Math.random().toFixed(2)
})

// TODO: change `2` to SHAPES.length - 1
export const randomShape = () => SHAPES[random(2)]
