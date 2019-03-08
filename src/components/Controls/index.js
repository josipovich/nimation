import React, { Fragment } from 'react'
import { view } from 'react-easy-state'
import ColorPicker from './ColorPicker'
import classNames from 'classnames'
import Slider from './Slider'
import { DEFAULT_ANIMATION_SPEED } from '../../consts'
import Store from '../../stores/Store'
import 'rc-slider/assets/index.css'
import githubLogo from './../../github.svg'
import refreshIcon from './../../refresh.svg'
import styled from 'styled-components'
import Content from '../Content'
import LogoAndClose from './LogoAndClose'
import ControlsPerShape from './ControlsPerShape'

const handleAnimationSpeedChange = value => {
  Store.animationSpeed = 1 + (value - 0.5)
}

const handleBackgroundColor = ({ rgb }) => {
  Store.backgroundColor = rgb
}

const handleRefreshClick = () => {
  window.location.reload()
}

const Controls = () => {
  const refreshButtonClasses = classNames('Button-refresh', {
    'Button-refresh--hidden': !Store.menuIsVisible
  })

  const githubLogoClasses = classNames('Github-logo', {
    'Github-logo--hidden': !Store.menuIsVisible
  })

  return (
    <Fragment>
      <LogoAndClose backgroundColor={Store.backgroundColor} menuIsVisible={Store.menuIsVisible} />

      <div className={`Controls Controls--top${!Store.menuIsVisible ? ' Controls--hidden' : ''}`}>
        <Content>
          <ControlsPerShape shapes={Store.shapes} />
        </Content>
      </div>

      <div
        className={`Controls Controls--bottom${!Store.menuIsVisible ? ' Controls--hidden' : ''}`}
      >
        <Content>
          <button onClick={handleRefreshClick} className={refreshButtonClasses}>
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
            <img className={githubLogoClasses} src={githubLogo} />
          </a>
        </Content>
      </div>
    </Fragment>
  )
}

export default view(Controls)
