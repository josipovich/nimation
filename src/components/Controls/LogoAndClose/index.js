import React from 'react'
import { shape, bool } from 'prop-types'
import styled, { css } from 'styled-components'
import Content from '../../Content'
import CloseControls from './CloseControls'
import Logo from './Logo'

const StyledLogoAndClose = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  width: 100%;
  z-index: 2;
  padding: 0 2rem;
  transition: opacity 0.6s ease-in-out 3s;

  ${p =>
    !p.menuIsVisible
      ? css`
          opacity: 0;
          &:hover {
            transition: opacity 0.6s ease-in-out;
            opacity: 1;
          }
        `
      : ''}
`

const RelativeContent = styled(Content)`
  position: relative;
`

const LogoAndClose = ({ backgroundColor, menuIsVisible }) => {
  return (
    <StyledLogoAndClose menuIsVisible={menuIsVisible}>
      <RelativeContent>
        <Logo color={backgroundColor} />
        <CloseControls menuIsVisible={menuIsVisible} />
      </RelativeContent>
    </StyledLogoAndClose>
  )
}

LogoAndClose.propTypes = {
  backgroundColor: shape({}),
  menuIsVisible: bool
}

export default LogoAndClose
