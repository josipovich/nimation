import React from 'react'
import { view } from 'react-easy-state'
import styled, { keyframes } from 'styled-components'
import Ctor from '../Ctor'
import Store from '../../stores/Store'

const spinRight = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(359deg);
  }
`

const NimationStyled = styled.div`
  margin: auto;
  width: 100px;
  height: 100px;
  display: flex;
  position: relative;
  transform: rotate(45deg) scale(1);
  animation: ${spinRight} ${p => p.animationSpeed}s linear infinite;
`

const Nimation = () => {
  return (
    <NimationStyled animationSpeed={Store.animationSpeed} className="Nimation">
      {Store.ctors.map(ctorProps => (
        <Ctor {...ctorProps} />
      ))}
    </NimationStyled>
  )
}

export default view(Nimation)
