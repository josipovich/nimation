import React from 'react'
import ReactDOM from 'react-dom'

import Nimation from './components/Nimation'
import Controls from './components/Controls/'
import './styles.scss'

const App = () => {
  return (
    <div className="bg">
      <Nimation />
      <Controls />
    </div>
  )
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)
