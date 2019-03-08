import styled from 'styled-components'
import { CSS } from '../consts'

const Button = styled.button`
  padding: 0.3rem 0.75rem;
  vertical-align: top;
  border: 1px solid $white;
  height: 2rem;
  background: transparent;
  color: ${CSS.white};
  font-family: 'Noto Sans KR', sans-serif;
  font-size: 12px;
  margin-bottom: 0.5rem;
  white-space: nowrap;
  margin-left: -1px;
  outline: none;

  &:hover {
    cursor: pointer;
  }
`

export default Button
