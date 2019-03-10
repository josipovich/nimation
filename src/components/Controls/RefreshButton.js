import React from 'react'
import { bool } from 'prop-types'
import styled, { css } from 'styled-components'
import { CSS } from '../../consts'
import refreshIcon from '../../assets/refresh.svg'

const handleRefreshClick = () => {
  window.location.reload()
}

const StyledRefreshButton = styled.div`
  display: flex;
  position: fixed;
  left: 2rem;
  bottom: 1.8rem;
  margin-right: 1rem;
  background-color: transparent;
  border: none;
  outline: none;
  transition: opacity 0.4s ease-in-out 0.2s;
  cursor: pointer;

  @media all and (max-width: 1350px) {
    position: relative;
    left: 0;
    bottom: 6px;
  }

  ${p =>
    !p.menuIsVisible
      ? css`
          opacity: 0;
          cursor: auto !important;
        `
      : ''}
`

const RefreshButtonImage = styled.img`
  height: 2.35rem;
  width: 2.35rem;
  padding: 1px;
  border-radius: 50%;
  border: 1px solid transparent;

  &:hover {
    border: 1px solid ${CSS.WHITE};
  }
`

const RefreshButton = ({ menuIsVisible }) => (
  <StyledRefreshButton
    menuIsVisible={menuIsVisible}
    onClick={handleRefreshClick}
  >
    <RefreshButtonImage src={refreshIcon} />
  </StyledRefreshButton>
)

RefreshButton.propTypes = {
  menuIsVisible: bool
}

export default RefreshButton
