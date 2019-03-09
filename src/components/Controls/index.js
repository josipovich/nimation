import React, { Fragment } from 'react'
import { view } from 'react-easy-state'
import styled, { css } from 'styled-components'
import Store from 'stores/Store'

import Content from 'components/Styled/Content'
import { GroupAnimation, GroupBackgroundColor } from 'components/Styled/Groups'

import ColorPicker from 'components/Controls/ColorPicker'
import Slider from 'components/Controls/Slider'
import LogoAndClose from 'components/Controls/LogoAndClose'
import ControlsPerShape from 'components/Controls/ControlsPerShape'
import RefreshButton from 'components/Controls/RefreshButton'
import GithubIcon from 'components/Controls/GithubLink'

import { DEFAULT_ANIMATION_SPEED, CSS } from 'consts'
import 'rc-slider/assets/index.css'

const StyledControls = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  width: 100%;
  background: ${CSS.BLACK};
  transition: top 0.25s cubic-bezier(0.39, 0.575, 0.565, 1),
    bottom 0.2s cubic-bezier(0.39, 0.575, 0.565, 1);
`

const ControlsTop = styled(StyledControls)`
  box-shadow: 0 1rem 1.5rem 1.5rem ${CSS.BLACK};
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
  bottom: 0;
  padding: 0 2rem 2rem;
  box-shadow: 0 0 1.5rem 3rem ${CSS.BLACK};

  ${p =>
    !p.menuIsVisible
      ? css`
          bottom: -20rem;
        `
      : ''}
`

const handleAnimationSpeedChange = value => {
  Store.animationSpeed = 1 + (value - 0.5)
}

const handleBackgroundColor = ({ rgb }) => {
  Store.backgroundColor = rgb
}

const Controls = () => (
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

export default view(Controls)
