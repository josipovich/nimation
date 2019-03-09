import React from 'react'
import { bool } from 'prop-types'
import styled from 'styled-components'
import Store from 'stores/Store'
import Button from 'components/Styled/Button'
import { CSS } from 'consts'

const handleMenuClose = () => {
  Store.menuIsVisible = !Store.menuIsVisible
}

const StyledCloseControls = styled.div`
  position: fixed;
  width: 3rem;
  top: 2rem;
  right: 1rem;
  height: 3rem;

  @media all and (max-width: 1350px) {
    position: absolute;
    top: 2rem;
    right: 0;
    width: auto;
  }
`

const CloseButton = styled(Button)`
  color: ${CSS.WHITE};
  border: none;
  border: 1px solid ${CSS.WHITE};
  margin-bottom: 0;
  width: 2rem;
  height: 2rem;
  transition: transform 0.35s ease-in-out;
  transform: rotate(0);
  position: relative;

  ${p => (!p.menuIsVisible ? 'transform: rotate(90deg)' : '')}
`

const Svg = styled.svg`
  opacity: 1;
  height: 2rem;
  width: 2rem;
  transition: 0.15s opacity ease-in-out;
  transform: scale(1.5) rotate(0);
  padding: 0.37rem 0.2rem 0.2rem 0.075rem;

  ${p => (!p.menuIsVisible ? 'opacity: 0; display: none;' : '')}
`

const BurgerIcon = styled.div`
  position: absolute;
  top: 0.55rem;
  left: 0.55rem;
  width: 1.1rem;
  height: 0.8rem;
  opacity: 0;
  transform: rotate(90deg);
  transition: opacity 0.15s ease-in-out;

  & > div:last-of-type {
    margin-bottom: 0;
  }

  ${p => (!p.menuIsVisible ? 'opacity: 1;' : '')}
`

const BurgerLine = styled.div`
  background: ${CSS.WHITE};
  height: 0.2rem;
  margin-bottom: 0.3rem;
`

const CloseControls = ({ menuIsVisible }) => (
  <StyledCloseControls>
    <CloseButton menuIsVisible={menuIsVisible} onClick={handleMenuClose}>
      <Svg
        menuIsVisible={menuIsVisible}
        version="1.1"
        xmlns="http://www.w3.org/2000/Svg"
      >
        <line
          x1="1"
          y1="11"
          x2="11"
          y2="1"
          stroke={CSS.WHITE}
          strokeWidth="2"
        />
        <line
          x1="1"
          y1="1"
          x2="11"
          y2="11"
          stroke={CSS.WHITE}
          strokeWidth="2"
        />
      </Svg>
      <BurgerIcon menuIsVisible={menuIsVisible}>
        <BurgerLine />
        <BurgerLine />
        <BurgerLine />
      </BurgerIcon>
    </CloseButton>
  </StyledCloseControls>
)

CloseControls.propTypes = {
  menuIsVisible: bool
}

CloseControls.defaultProps = {
  menuIsVisible: false
}

export default CloseControls
