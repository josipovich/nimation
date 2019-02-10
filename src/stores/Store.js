import { store } from 'react-easy-state'
import { COLOR, POSITION, DEFAULT_SCALE } from '../consts'

const Store = store({
  animationSpeed: 0,
  ctors: [
    {
      id: 0,
      color: COLOR.CREAM,
      position: POSITION.TOP,
      scale: DEFAULT_SCALE.value,
      shape: 'circle'
      // order: 1
    },
    {
      id: 1,
      color: COLOR.RED,
      position: POSITION.LEFT,
      scale: DEFAULT_SCALE.value,
      shape: 'square'
      // order: 2
    },
    {
      id: 2,
      color: COLOR.GRAY,
      position: POSITION.RIGHT,
      scale: DEFAULT_SCALE.value,
      shape: 'triangle'
      // order: 3
    },
    {
      id: 3,
      color: COLOR.ORANGE,
      position: POSITION.BOTTOM,
      scale: DEFAULT_SCALE.value,
      shape: 'square'
      // order: 4
    }
  ]
})

export default Store
