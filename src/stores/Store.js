import { store } from 'react-easy-state'
import { generateRgba, randomShape } from '../utils'
import { POSITIONS, DEFAULT_SCALE, DEFAULT_ANIMATION_SPEED } from '../consts'

const Store = store({
  animationSpeed: DEFAULT_ANIMATION_SPEED,
  backgroundColor: generateRgba(),
  menuIsVisible: true,
  shapes: [
    {
      id: 0,
      color: generateRgba(),
      position: POSITIONS[0],
      scale: DEFAULT_SCALE.value,
      shape: randomShape(),
      fly: true,
      pulse: true
      // order: 1
    },
    {
      id: 1,
      color: generateRgba(),
      position: POSITIONS[1],
      scale: DEFAULT_SCALE.value,
      shape: randomShape(),
      fly: true,
      pulse: true
      // order: 2
    },
    {
      id: 2,
      color: generateRgba(),
      position: POSITIONS[2],
      scale: DEFAULT_SCALE.value,
      shape: randomShape(),
      fly: true,
      pulse: true
      // order: 3
    },
    {
      id: 3,
      color: generateRgba(),
      position: POSITIONS[3],
      scale: DEFAULT_SCALE.value,
      shape: randomShape(),
      fly: true,
      pulse: true
      // order: 4
    }
  ]
})

export default Store
