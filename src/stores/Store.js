import { store } from 'react-easy-state'
import { generateRgba, randomShape } from 'utils'
import { random } from 'lodash'
import { POSITIONS, DEFAULT_ANIMATION_SPEED } from 'consts'

const Store = store({
  animationSpeed: random(
    DEFAULT_ANIMATION_SPEED - 0.04,
    DEFAULT_ANIMATION_SPEED + 0.02
  ),
  backgroundColor: generateRgba(),
  menuIsVisible: true,
  mouseMoving: false,
  shapes: [
    {
      id: 0,
      color: generateRgba(),
      position: POSITIONS[0],
      scale: `${random(1, 3)}`,
      shape: randomShape(),
      fly: true,
      pulse: true
      // order: 1
    },
    {
      id: 1,
      color: generateRgba(),
      position: POSITIONS[1],
      scale: `${random(1, 3)}`,
      shape: randomShape(),
      fly: true,
      pulse: true
      // order: 2
    },
    {
      id: 2,
      color: generateRgba(),
      position: POSITIONS[2],
      scale: `${random(1, 3)}`,
      shape: randomShape(),
      fly: true,
      pulse: true
      // order: 3
    },
    {
      id: 3,
      color: generateRgba(),
      position: POSITIONS[3],
      scale: `${random(1, 3)}`,
      shape: randomShape(),
      fly: true,
      pulse: true
      // order: 4
    }
  ]
})

export default Store
