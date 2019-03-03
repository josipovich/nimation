import React, { Fragment } from 'react'
import { view } from 'react-easy-state'
import ColorPicker from './ColorPicker'
import classNames from 'classnames'
import Checkbox from './Checkbox'
import Slider from './Slider'
import Logo from './../Logo'
import { SHAPES, DEFAULT_ANIMATION_SPEED } from '../../consts'
import { immutableSplice } from '../../utils'
import Store from '../../stores/Store'
import 'rc-slider/assets/index.css'
import githubLogo from './../../github.svg'
import refreshIcon from './../../refresh.svg'

const handleShapeChange = id => value => {
  Store.shapes.find(d => d.id === id).shape = SHAPES[value]
}

const handleScaleChange = id => value => {
  Store.shapes.find(d => d.id === id).scale = value
}

const handleSendToTopClick = id => () => {
  Store.shapes = immutableSplice(
    Store.shapes.filter(ctor => ctor.id !== id),
    Store.shapes.length - 1,
    0,
    Store.shapes.find(ctor => ctor.id === id)
  )
}

const handleColorChange = id => ({ rgb }) => {
  Store.shapes.find(d => d.id === id).color = rgb
}

const handleAnimationSpeedChange = value => {
  Store.animationSpeed = 1 + (value - 0.5)
}

const handleBackgroundColor = ({ rgb }) => {
  Store.backgroundColor = rgb
}

const handleFlyChange = id => e => {
  Store.shapes.find(d => d.id === id).fly = e.target.checked
}

const handlePulseChange = id => e => {
  Store.shapes.find(d => d.id === id).pulse = e.target.checked
}

const handleMenuClose = () => {
  Store.menuIsVisible = !Store.menuIsVisible
}

const handleRefreshClick = () => {
  window.location.reload()
}

const Controls = () => {
  const buttonClassNames = classNames('Button Button--close', {
    'Button--menu-hidden': !Store.menuIsVisible
  })

  const logoAndCloseClasses = classNames('LogoAndClose', {
    'LogoAndClose--hidden': !Store.menuIsVisible
  })
  return (
    <Fragment>
      <div className={logoAndCloseClasses}>
        <div className="Content">
          <Logo color={Store.backgroundColor} />
          <div className="Controls__close">
            <button onClick={handleMenuClose} className={buttonClassNames}>
              <svg version="1.1" xmlns="http://www.w3.org/2000/svg">
                <line x1="1" y1="11" x2="11" y2="1" stroke="#c5c5af" strokeWidth="2" />
                <line x1="1" y1="1" x2="11" y2="11" stroke="#c5c5af" strokeWidth="2" />
              </svg>
              <div className="Burger-icon">
                <div className="Burger-icon__rect" />
                <div className="Burger-icon__rect" />
                <div className="Burger-icon__rect" />
              </div>
            </button>
          </div>
        </div>
      </div>

      <div className={`Controls Controls--top${!Store.menuIsVisible ? ' Controls--hidden' : ''}`}>
        <div className="Content">
          {Store.shapes.map((currentShape, id) => {
            const { color, shape } = currentShape
            return (
              <div key={id} className="Group">
                <div className="Group__row">
                  <ColorPicker
                    layerBetween={Store.backgroundColor}
                    color={color}
                    whiteBg
                    onChange={handleColorChange(id)}
                  />
                  <button className="Button" onClick={handleSendToTopClick(id)}>
                    Send to top
                  </button>
                </div>
                <Slider
                  label="Scale"
                  step={0.1}
                  onChange={handleScaleChange(id)}
                  defaultValue={1}
                  min={0}
                  max={20}
                />
                <Slider
                  label="Shape"
                  step={1}
                  onChange={handleShapeChange(id)}
                  defaultValue={SHAPES.indexOf(shape)}
                  min={0}
                  max={2}
                />
                <Checkbox
                  name="fly"
                  label="Fly"
                  onChange={handleFlyChange(id)}
                  id={id}
                  checked={Store.shapes[id].fly}
                />
                <Checkbox
                  name="pulse"
                  label="Pulse"
                  onChange={handlePulseChange(id)}
                  id={id}
                  checked={Store.shapes[id].pulse}
                />
              </div>
            )
          })}
        </div>
      </div>

      <div
        className={`Controls Controls--bottom${!Store.menuIsVisible ? ' Controls--hidden' : ''}`}
      >
        <div className="Content">
          <button onClick={handleRefreshClick} className="Button-refresh">
            <img src={refreshIcon} />
          </button>
          <div className="Group Group--background-color">
            <ColorPicker
              whiteBg
              directionTop
              width="2rem"
              color={Store.backgroundColor}
              onChange={handleBackgroundColor}
            />
          </div>

          <div className="Group Group--animation-speed">
            <Slider
              step={0.001}
              onChange={handleAnimationSpeedChange}
              defaultValue={DEFAULT_ANIMATION_SPEED - 1}
              min={-0.5}
              max={0}
            />
          </div>
          <a href="https://github.com/josipovich">
            <img className="Github-logo" src={githubLogo} />
          </a>
        </div>
      </div>
    </Fragment>
  )
}

export default view(Controls)
