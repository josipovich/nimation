import React from 'react'
import { view } from 'react-easy-state'
import styled, { css } from 'styled-components'
import Store from '../stores/Store'
import Spiner from './Spiner'
import Controls from './Controls/'
import cssVars from '../cssVars'

const backgroundColorStyles = ({ r, g, b, a }) => css`
  background-color: rgba(${r}, ${g}, ${b}, ${a});
`

const Layout = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
  flex-content: center;
  font-family: 'Noto Sans KR', sans-serif;
  font-size: 12px;
  color: ${cssVars.white};
  ${p => backgroundColorStyles(p.backgroundColor)}
`

const App = () => {
  return (
    <Layout backgroundColor={Store.backgroundColor}>
      <Spiner />
      <Controls />
    </Layout>
  )
}

export default view(App)
