import React from 'react'
import { string, func, bool } from 'prop-types'
import styled from 'styled-components'

const StyledCheckbox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 0.5rem;
`

const CheckboxWrapper = styled.div`
  display: inline-block;

  input[type='checkbox'] {
    display: none;

    & + label::after {
      content: none;
    }

    &:checked + label::after {
      content: '';
    }
  }

  label {
    position: relative;
    padding-left: 22px;

    &:hover {
      cursor: pointer;
    }

    &::after,
    &::before {
      position: absolute;
      display: inline-block;
      content: '';
    }

    &::before {
      height: 16px;
      width: 16px;
      border: 1px solid;
      left: 4px;
    }

    &::after {
      height: 5px;
      width: 9px;
      border-left: 2px solid;
      border-bottom: 2px solid;
      transform: rotate(-45deg);
      left: 8px;
      top: 4px;
    }
  }
`

const Checkbox = ({ id, onChange, label, checked, name }) => (
  <StyledCheckbox>
    <label>{label}</label>
    <CheckboxWrapper>
      <input
        defaultChecked={checked}
        type="checkbox"
        onChange={onChange}
        id={`${name}-${id}`}
      />
      <label htmlFor={`${name}-${id}`} />
    </CheckboxWrapper>
  </StyledCheckbox>
)

Checkbox.propTypes = {
  id: string.isRequired,
  name: string.isRequired,
  onChange: func.isRequired,
  label: string,
  checked: bool
}

Checkbox.defaultProps = {
  label: '',
  checked: true
}

export default Checkbox
