import styled from 'styled-components'
import { CSS } from '../../consts'

const Button = styled.button`
  height: 2rem;
  padding: 0.3rem 0.75rem;
  margin-left: -1px;
  margin-bottom: 0.5rem;
  vertical-align: top;
  border: 1px solid $white;
  background: transparent;
  color: ${CSS.WHITE};
  font-family: 'Noto Sans KR', sans-serif;
  font-size: 12px;
  white-space: nowrap;
  outline: none;

  &:hover {
    cursor: pointer;
  }
`

export default Button
