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

const Layout = styled.div`
  ${p => backgroundColorStyles(p.backgroundColor)}
`

const SpinerAnimation = styled.div`
  animation: ${spinRight} ${p => p.animationSpeed}s linear infinite;
`

const Spiner = () => {
  return (
    <Layout className="Layout" backgroundColor={Store.backgroundColor}>
      <SpinerAnimation className="Spiner" animationSpeed={Store.animationSpeed}>
        {Store.shapes.map((shapeProps, i) => (
          <Shape key={i} order={i + 1} {...shapeProps} />
        ))}
      </SpinerAnimation>
      <Controls />
    </Layout>
  )
}

export default view(Spiner)
