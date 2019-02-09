import { store } from 'react-easy-state'
import { COLOR, POSITION, DEFAULT_SCALE } from './consts'

const Store = store({
  animationSpeed: 0,
  ctors: [
    {
      id: 0,
      color: COLOR.CREAM,
      position: POSITION.TOP,
      scale: DEFAULT_SCALE,
      shape: 'circle'
    },
    {
      id: 1,
      color: COLOR.RED,
      position: POSITION.LEFT,
      scale: DEFAULT_SCALE,
      shape: 'square'
    },
    {
      id: 2,
      color: COLOR.GRAY,
      position: POSITION.RIGHT,
      scale: DEFAULT_SCALE,
      shape: 'triangle'
    },
    {
      id: 3,
      color: COLOR.ORANGE,
      position: POSITION.BOTTOM,
      scale: DEFAULT_SCALE,
      shape: 'square'
    }
  ]
})

export default Store
