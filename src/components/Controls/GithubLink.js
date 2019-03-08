import React from 'react'
import { bool } from 'prop-types'
import styled, { css } from 'styled-components'
import { GITHUB_URL, CSS } from 'consts'
import githubLogo from 'assets/github.svg'

const StyledGithubIcon = styled.img`
  width: 2.5rem;
  height: 2.5rem;
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  padding: 3px;
  border-radius: 50%;
  border: 1px solid transparent;
  transition: opacity 0.4s ease-in-out 0.2s;

  ${p =>
    !p.menuIsVisible
      ? css`
          opacity: 0;
          cursor: auto;
        `
      : ''}

  :hover {
    border: 1px solid ${CSS.white};
  }

  @media all and (max-width: 1350px) {
    bottom: 0.25rem;
    right: 0;
    position: relative;
    margin-left: 1.5rem;
  }
`

const GithubIcon = ({ menuIsVisible }) => (
  <a href={GITHUB_URL}>
    <StyledGithubIcon src={githubLogo} menuIsVisible={menuIsVisible} />
  </a>
)

GithubIcon.propTypes = {
  menuIsVisible: bool
}

export default GithubIcon
