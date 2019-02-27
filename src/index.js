import React from 'react'
import ReactDOM from 'react-dom'
import Nimation from './components/Nimation'
import './styles.css'

const App = () => <Nimation />

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)
