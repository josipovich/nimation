import React from 'react'
import ReactDOM from 'react-dom'

import Nimation from './Nimation'
import Controls from './Controls'
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
