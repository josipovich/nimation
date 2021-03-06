import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { APP_NAME, CSS } from '../../../consts'

const StyledLogo = styled.div`
  position: fixed;
  left: 2rem;
  top: 2rem;
  padding-bottom: 1.5rem;
  border-bottom: 1px solid ${CSS.WHITE};

  svg {
    width: 2rem;
  }

  @media all and (max-width: 1350px) {
    position: relative;
    top: 2rem;
    left: 0;
    margin-bottom: 2rem;
  }

  @media all and (max-width: 665px) {
    width: 100%;
  }
`

const AppName = styled.div`
  font-size: 1.7rem;
  display: inline-block;
  vertical-align: top;
  margin-top: -0.6rem;
  margin-left: 1.5rem;
  padding-top: 0.25rem;
`

const Logo = ({ color }) => {
  return (
    <StyledLogo>
      <svg
        width="2rem"
        height="2rem"
        viewBox="0 0 135 135"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill={`rgba(${color.r},${color.g},${color.b}, 1)`}
          strokeWidth="2"
          stroke="#c5c5af"
          d="M67.447 58c5.523 0 10-4.477 10-10s-4.477-10-10-10-10 4.477-10 10
            4.477 10 10 10zm9.448 9.447c0 5.523 4.477 10 10 10 5.522 0 10-4.477
            10-10s-4.478-10-10-10c-5.523 0-10 4.477-10 10zm-9.448 9.448c-5.523
            0-10 4.477-10 10 0 5.522 4.477 10 10 10s10-4.478 
            10-10c0-5.523-4.477-10-10-10zM58 67.447c0-5.523-4.477-10-10-10s-10 
            4.477-10 10 4.477 10 10 10 10-4.477 10-10z"
        >
          <animateTransform
            attributeName="transform"
            type="rotate"
            from="0 67 67"
            to="-360 67 67"
            dur=".6s"
            repeatCount="indefinite"
          />
        </path>
        <path
          fill={`rgba(${color.r},${color.g},${color.b}, .3)`}
          strokeWidth="2"
          stroke="#c5c5af"
          d="M28.19 40.31c6.627 0 12-5.374 12-12 0-6.628-5.373-12-12-12-6.628
            0-12 5.372-12 12 0 6.626 5.372 12 12 12zm30.72-19.825c4.686 4.687
            12.284 4.687 16.97 0 4.686-4.686 4.686-12.284
            0-16.97-4.686-4.687-12.284-4.687-16.97 0-4.687 4.686-4.687 12.284
            0 16.97zm35.74 7.705c0 6.627 5.37 12 12 12 6.626 0 12-5.373 12-12
            0-6.628-5.374-12-12-12-6.63 0-12 5.372-12 12zm19.822 
            30.72c-4.686 4.686-4.686 12.284 0 16.97 4.687 4.686 12.285 4.686 
            16.97 0 4.687-4.686 4.687-12.284 0-16.97-4.685-4.687-12.283-4.687-16.97 
            0zm-7.704 35.74c-6.627 0-12 5.37-12 12 0 6.626 5.373 12 12 12s12-5.374
            12-12c0-6.63-5.373-12-12-12zm-30.72 19.822c-4.686-4.686-12.284-4.686-16.97 
            0-4.686 4.687-4.686 12.285 0 16.97 4.686 4.687 12.284 4.687 16.97 0 
            4.687-4.685 4.687-12.283 0-16.97zm-35.74-7.704c0-6.627-5.372-12-12-12-6.626 
            0-12 5.373-12 12s5.374 12 12 12c6.628 0 12-5.373 12-12zm-19.823-30.72c4.687-4.686 
            4.687-12.284 0-16.97-4.686-4.686-12.284-4.686-16.97 0-4.687 4.686-4.687 
            12.284 0 16.97 4.686 4.687 12.284 4.687 16.97 0z"
        >
          <animateTransform
            attributeName="transform"
            type="rotate"
            from="0 67 67"
            to="360 67 67"
            dur="1s"
            repeatCount="indefinite"
          />
        </path>
      </svg>
      <AppName>{APP_NAME}</AppName>
    </StyledLogo>
  )
}

Logo.propTypes = {
  color: PropTypes.shape({}).isRequired
}

export default Logo
