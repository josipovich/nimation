import React from 'react'
import { view } from 'react-easy-state'
import styled, { keyframes } from 'styled-components'
import Shape from 'components/Shape'
import Store from 'stores/Store'
import { CSS } from 'consts'

const spinRight = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(359deg);
  }
`

const StyledSpiner = styled.div`
  width: ${CSS.SPINER_WIDTH};
  height: ${CSS.SPINER_HEIGHT};
  margin: auto;
  transform: rotate(45deg) scale(1);
  animation: ${spinRight} ${p => p.animationSpeed}s linear infinite;
`

const Spiner = () => (
  <StyledSpiner animationSpeed={Store.animationSpeed}>
    {Store.shapes.map((props, i) => (
      <Shape key={i} order={i} {...props} />
    ))}
  </StyledSpiner>
)

export default view(Spiner)
