import React from 'react'
import ReactDOM from 'react-dom'
import Spiner from './components/Spiner'
import './styles.css'

const App = () => <Spiner />

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)
