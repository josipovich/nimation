import React from 'react'
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
        color: {
          width: '36px',
          height: '14px',
          borderRadius: '2px',
          background: `rgba(${this.state.color.r}, ${this.state.color.g}, ${this.state.color.b}, ${
            this.state.color.a
          })`
        },
        swatch: {
          padding: '5px',
          background: '#fff',
          borderRadius: '1px',
          boxShadow: '0 0 0 1px #ccc',
          display: 'inline-block',
          cursor: 'pointer'
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

    return (
      <ColorPickerStyled>
        <div style={styles.swatch} onClick={this.handleClick}>
          <div style={styles.color} />
        </div>
        {this.state.displayColorPicker ? (
          <div style={styles.popover}>
            <div style={styles.cover} onClick={this.handleClose} />
            <ChromePicker color={this.state.color} onChange={this.handleChange} />
          </div>
        ) : null}
      </ColorPickerStyled>
    )
  }
}

export default view(ColorPicker)
