import React from 'react'
import { view } from 'react-easy-state'
import styled, { css } from 'styled-components'
import Store from 'stores/Store'
import Spiner from 'components/Spiner'
import Controls from 'components/Controls/'
import { CSS } from 'consts'

const backgroundColorStyles = ({ r, g, b, a }) => css`
  background-color: rgba(${r}, ${g}, ${b}, ${a});
`

const Layout = styled.div`
  height: 100vh;
  display: flex;
  font-family: 'Noto Sans KR', sans-serif;
  font-size: 12px;
  color: ${CSS.WHITE};

  ${p => backgroundColorStyles(p.backgroundColor)}
`

const handleOnMouseMove = () => {
  Store.mouseMoving = true
  let timeout
  ;(() => {
    clearTimeout(timeout)
    timeout = setTimeout(() => {
      console.log(Store.mouseMoving)
      Store.mouseMoving = false
    }, 500)
  })()
}

const App = () => {
  return (
    <Layout
      onMouseMove={handleOnMouseMove}
      backgroundColor={Store.backgroundColor}
    >
      <Spiner />
      <Controls />
    </Layout>
  )
}

export default view(App)
