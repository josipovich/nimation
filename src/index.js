import React from 'react'
import ReactDOM from 'react-dom'
import styled from 'styled-components'

import Nimation from './components/Nimation'
import Controls from './components/Controls/'
import './styles.css'

const AppWrapper = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
  flex-content: center;
`

const App = () => {
  return (
    <AppWrapper>
      <Nimation />
      <Controls />
    </AppWrapper>
  )
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)
