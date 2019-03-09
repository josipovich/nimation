import React from 'react'
import { shape, bool } from 'prop-types'
import styled, { css } from 'styled-components'
import Content from 'components/Styled/Content'
import CloseControls from 'components/Controls/LogoAndClose/CloseControls'
import Logo from 'components/Controls/LogoAndClose/Logo'

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

  ${p =>
    !p.menuIsVisible && p.mouseMoving
      ? css`
          transition: opacity 0.6s ease-in-out;
          opacity: 1 !important;
        `
      : ''}
`

const RelativeContent = styled(Content)`
  position: relative;
`

const LogoAndClose = ({ backgroundColor, menuIsVisible, mouseMoving }) => {
  return (
    <StyledLogoAndClose mouseMoving={mouseMoving} menuIsVisible={menuIsVisible}>
      <RelativeContent>
        <Logo color={backgroundColor} />
        <CloseControls menuIsVisible={menuIsVisible} />
      </RelativeContent>
    </StyledLogoAndClose>
  )
}

LogoAndClose.propTypes = {
  backgroundColor: shape({}).isRequired,
  menuIsVisible: bool.isRequired,
  mouseMoving: bool.isRequired
}

export default LogoAndClose
