import React from 'react'
import { string, func, bool } from 'prop-types'

const Checkbox = ({ id, onChange, label, checked, name }) => (
  <div className="Checkbox">
    <label>{label}</label>
    <div className="Checkbox--wrapper">
      <input defaultChecked={checked} type="checkbox" onChange={onChange} id={`${name}-${id}`} />
      <label htmlFor={`${name}-${id}`} />
    </div>
  </div>
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
