import React from 'react'
import className from 'classnames'
import { view } from 'react-easy-state'
import styled from 'styled-components'

const Ctor = ({ id, position, color, scale, animationSpeed, shape }) => {
  const Ctor = styled.div``

  const classNames = className('Ctor', {
    [`Ctor--${position}`]: !!position
  })

  const colorStyles = {
    backgroundColor: `rgba(${color.r}, ${color.g}, ${color.b}, ${color.a})`
  }
  const transformStyles = {
    transform: `
      scale(${scale}) ${shape === 'triangle' ? 'rotate(245deg) translateX(10%)' : ''}`
  }

  const circleStyles = {
    borderRadius: shape === 'circle' ? '50%' : null
  }

  const fontSize = '3rem'
  const triangleStyles =
    shape === 'triangle'
      ? {
        width: 0,
        height: 0,
        borderLeft: `${fontSize} solid transparent`,
        borderRight: `${fontSize} solid transparent`,
        borderBottom: `${fontSize} solid rgba(${color.r}, ${color.g}, ${color.b}, ${color.a})`,
        background: 'none'
      }
      : null
  return (
    <div
      style={{
        ...colorStyles,
        ...transformStyles,
        ...circleStyles,
        ...triangleStyles
      }}
      className={classNames}
    />
  )
}
export default view(Ctor)
