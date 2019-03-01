import { range } from 'lodash'

export const DEFAULT_SCALE = { label: '1', value: '2' }

export const POSITION = {
  TOP: 'top',
  LEFT: 'left',
  RIGHT: 'right',
  BOTTOM: 'bottom'
}

export const OPTIONS = {
  POSITIONS: [
    { value: 'top', label: 'Top' },
    { value: 'bottom', label: 'Bottom' },
    { value: 'left', label: 'Left' },
    { value: 'right', label: 'Right' }
  ],
  ORDERS: [
    { value: 1, label: '1' },
    { value: 2, label: '2' },
    { value: 3, label: '3' },
    { value: 4, label: '4' }
  ],
  COLORS: [
    { value: 'yellow', label: 'Gold' },
    { value: 'green', label: 'Green' },
    { value: 'blue', label: 'Blue' },
    { value: 'red', label: 'Red' }
  ],
  SCALES: range(11).map(i => ({ label: `${i}`, value: `${i * 2}` })),
  // SHAPES: [
  //   { value: 'circle', label: 'Circle' },
  //   { value: 'square', label: 'Square' },
  //   { value: 'triangle', label: 'Triangle' }
  // ],
  SHAPES: ['circle', 'square', 'triangle']
}

export const DEFAULT_ANIMATION_SPEED = 0.15

export const COLOR = {
  CREAM: {
    r: '255',
    g: '241',
    b: '166',
    a: '1'
  },
  ORANGE: {
    r: '255',
    g: '158',
    b: '69',
    a: '1'
  },
  RED: {
    r: '243',
    g: '40',
    b: '101',
    a: '1'
  },
  GRAY: {
    r: '235',
    g: '235',
    b: '235',
    a: '1'
  },
  WHITE: {
    r: '255',
    g: '255',
    b: '255',
    a: '1'
  }
}
