import React from 'react'
import { view } from 'react-easy-state'
import styled, { keyframes, css } from 'styled-components'
import Shape from '../Shape'
import Store from '../../stores/Store'
import Controls from '../Controls/'

const spinRight = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(359deg);
  }
`

const backgroundColorStyles = ({ r, g, b, a }) => css`
  background-color: rgba(${r}, ${g}, ${b}, ${a});
`

const AppWrapper = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
  flex-content: center;
  font-family: 'Noto Sans KR', sans-serif;
  font-size: 12px;
  color: white;
  ${p => backgroundColorStyles(p.backgroundColor)}
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
    <AppWrapper backgroundColor={Store.backgroundColor}>
      <NimationStyled animationSpeed={Store.animationSpeed} className="Nimation">
        {Store.ctors.map((ctorProps, i) => (
          <Shape order={i + 1} {...ctorProps} />
        ))}
      </NimationStyled>
      <Controls />
    </AppWrapper>
  )
}

export default view(Nimation)
