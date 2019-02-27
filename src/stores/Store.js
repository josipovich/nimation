import { store } from 'react-easy-state'
import { generateRgba } from '../utils'
import { COLOR, POSITION, DEFAULT_SCALE } from '../consts'

const Store = store({
  animationSpeed: 0.15,
  backgroundColor: generateRgba(),
  ctors: [
    {
      id: 0,
      color: generateRgba(),
      position: POSITION.TOP,
      scale: DEFAULT_SCALE.value,
      shape: 'circle',
      fly: true,
      pulse: true
      // order: 1
    },
    {
      id: 1,
      color: generateRgba(),
      position: POSITION.LEFT,
      scale: DEFAULT_SCALE.value,
      shape: 'square',
      fly: true,
      pulse: true
      // order: 2
    },
    {
      id: 2,
      color: generateRgba(),
      position: POSITION.RIGHT,
      scale: DEFAULT_SCALE.value,
      shape: 'triangle',
      fly: true,
      pulse: true
      // order: 3
    },
    {
      id: 3,
      color: generateRgba(),
      position: POSITION.BOTTOM,
      scale: DEFAULT_SCALE.value,
      shape: 'square',
      fly: true,
      pulse: true
      // order: 4
    }
  ]
})

export default Store
