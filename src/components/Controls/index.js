import React, { Fragment } from 'react'
import { view } from 'react-easy-state'
import ColorPicker from './ColorPicker'
import classNames from 'classnames'
import Slider from './Slider'
import { DEFAULT_ANIMATION_SPEED } from '../../consts'
import { CSS } from '../../consts'
import Store from '../../stores/Store'
import 'rc-slider/assets/index.css'
import styled, { css } from 'styled-components'
import Content from '../Styled/Content'
import LogoAndClose from './LogoAndClose'
import ControlsPerShape from './ControlsPerShape'
import { GroupAnimation, GroupBackgroundColor } from '../Styled/Groups'
import RefreshButton from './RefreshButton'
import GithubIcon from './GithubLink'

const StyledControls = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  width: 100%;
  background: ${CSS.black};
  transition: top 0.25s cubic-bezier(0.39, 0.575, 0.565, 1),
    bottom 0.2s cubic-bezier(0.39, 0.575, 0.565, 1);
`

const ControlsTop = styled(StyledControls)`
  box-shadow: 0 1rem 1.5rem 1.5rem ${CSS.black};
  padding: 2rem 2rem 0;
  top: 0;

  ${p =>
    !p.menuIsVisible
      ? css`
          top: -22rem;
        `
      : ''}

  @media all and (max-width: 1350px) {
    padding-top: 8rem;
  }
`

const ControlsBottom = styled(StyledControls)`
  box-shadow: 0 0 1.5rem 3rem ${CSS.black};
  bottom: 0;
  padding: 0 2rem 2rem;
  flex-wrap: nowrap;

  ${p =>
    !p.menuIsVisible
      ? css`
          bottom: -20rem;
        `
      : 0}

  @media all and (max-width: 1350px) {
    .Slider {
      padding-right: 2rem;
    }
  }
`

const handleAnimationSpeedChange = value => {
  Store.animationSpeed = 1 + (value - 0.5)
}

const handleBackgroundColor = ({ rgb }) => {
  Store.backgroundColor = rgb
}

const Controls = () => {
  const githubLogoClasses = classNames('Github-logo', {
    'Github-logo--hidden': !Store.menuIsVisible
  })

  return (
    <Fragment>
      <LogoAndClose
        backgroundColor={Store.backgroundColor}
        menuIsVisible={Store.menuIsVisible}
      />

      <ControlsTop menuIsVisible={Store.menuIsVisible}>
        <Content>
          <ControlsPerShape
            shapes={Store.shapes}
            backgroundColor={Store.backgroundColor}
          />
        </Content>
      </ControlsTop>

      <ControlsBottom menuIsVisible={Store.menuIsVisible}>
        <Content>
          <RefreshButton menuIsVisible={Store.menuIsVisible} />
          <GroupBackgroundColor>
            <ColorPicker
              whiteBg
              directionTop
              width="2rem"
              color={Store.backgroundColor}
              onChange={handleBackgroundColor}
            />
          </GroupBackgroundColor>
          <GroupAnimation>
            <Slider
              step={0.001}
              onChange={handleAnimationSpeedChange}
              defaultValue={DEFAULT_ANIMATION_SPEED - 1}
              min={-0.5}
              max={0}
            />
          </GroupAnimation>
          <GithubIcon menuIsVisible={Store.menuIsVisible} />
        </Content>
      </ControlsBottom>
    </Fragment>
  )
}

export default view(Controls)
