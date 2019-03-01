import React from 'react'
import { shape, func } from 'prop-types'
import { view } from 'react-easy-state'
import reactCSS from 'reactcss'
import styled from 'styled-components'
import { ChromePicker } from 'react-color'

const ColorPickerStyled = styled.div`
  margin-bottom: 0.3rem;
  display: inline-block;
`

class ColorPicker extends React.Component {
  state = {
    displayColorPicker: false,
    color: this.props.color
  }

  handleClick = () => {
    this.setState({ displayColorPicker: !this.state.displayColorPicker })
  }

  handleClose = () => {
    this.setState({ displayColorPicker: false })
  }

  handleChange = color => {
    this.props.onChange(color)
    this.setState({ color: color.rgb })
  }

  render() {
    const styles = reactCSS({
      default: {
        colors: {
          width: '100%',
          height: '100%',
          // borderRadius: '2px',
          background: `rgba(${this.state.color.r}, ${this.state.color.g}, ${this.state.color.b}, ${
            this.state.color.a
          })`
        },
        swatch: {
          padding: '1px',
          background: '#fff',
          // boxShadow: '0 0 0 1px #ccc',
          display: 'inline-block',
          cursor: 'pointer',
          width: '100%',
          height: '2rem'
        },
        popover: {
          position: 'absolute',
          zIndex: '2'
        },
        cover: {
          position: 'fixed',
          top: '0px',
          right: '0px',
          bottom: '0px',
          left: '0px'
        }
      }
    })

    const {
      handleClick,
      handleClose,
      handleChange,
      state: { color, displayColorPicker }
    } = this

    const { swatch, colors, popover, cover } = styles

    return (
      <ColorPickerStyled>
        <div style={swatch} onClick={handleClick}>
          <div style={colors} />
        </div>
        {displayColorPicker && (
          <div style={popover}>
            <div style={cover} onClick={handleClose} />
            <ChromePicker color={color} onChange={handleChange} />
          </div>
        )}
      </ColorPickerStyled>
    )
  }
}

ColorPicker.propTypes = {
  color: shape({}).isRequired,
  onChange: func.isRequired
}

export default view(ColorPicker)
