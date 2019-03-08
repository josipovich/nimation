import React from 'react'
import { view } from 'react-easy-state'
import styled, { keyframes } from 'styled-components'
import Shape from 'components/Shape'
import Store from 'stores/Store'

const spinRight = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(359deg);
  }
`

const StyledSpiner = styled.div`
  margin: auto;
  width: 100px;
  height: 100px;
  display: flex;
  position: relative;
  transform: rotate(45deg) scale(1);
  animation: ${spinRight} ${p => p.animationSpeed}s linear infinite;
`

const Spiner = () => (
  <StyledSpiner animationSpeed={Store.animationSpeed}>
    {Store.shapes.map((shapeProps, i) => (
      <Shape key={i} order={i + 1} {...shapeProps} />
    ))}
  </StyledSpiner>
)

export default view(Spiner)
