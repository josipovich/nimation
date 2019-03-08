import React from 'react'
import { shape, func, string, bool } from 'prop-types'
import { view } from 'react-easy-state'
import reactCSS from 'reactcss'
import { ChromePicker } from 'react-color'

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
    // guah!
    const styles = reactCSS({
      default: {
        colors: {
          width: '100%',
          height: '100%',
          background: `rgba(${this.state.color.r}, ${this.state.color.g}, ${
            this.state.color.b
          }, ${this.state.color.a})`
        },
        swatch: {
          border: '1px solid #c5c5af',
          background: this.props.layerBetween
            ? `rgba(${this.props.layerBetween.r},${this.props.layerBetween.g},${
                this.props.layerBetween.b
              },${this.props.layerBetween.a})`
            : 'none',
          display: 'inline-block',
          cursor: 'pointer',
          width: '100%',
          height: '2rem'
        },
        popover: {
          position: 'absolute',
          top: `${this.props.directionTop && '-16rem'}`,
          zIndex: '2'
        },
        cover: {
          position: 'fixed',
          top: '0px',
          right: '0px',
          bottom: '0px',
          left: '0px'
        },
        wrapper: {
          width: this.props.width,
          display: 'inline-block',
          height: '2rem',
          background: '#fff'
        }
      }
    })

    const {
      handleClick,
      handleClose,
      handleChange,
      state: { color, displayColorPicker }
    } = this

    const { swatch, colors, popover, cover, wrapper } = styles

    return (
      <div style={wrapper}>
        <div style={swatch} onClick={handleClick}>
          <div style={colors} />
        </div>
        {displayColorPicker && (
          <div style={popover}>
            <div style={cover} onClick={handleClose} />
            <ChromePicker color={color} onChange={handleChange} />
          </div>
        )}
      </div>
    )
  }
}

ColorPicker.propTypes = {
  color: shape({}).isRequired,
  onChange: func.isRequired,
  width: string,
  whiteBg: bool
}

ColorPicker.defaultProps = {
  width: '100%',
  whiteBg: false
}

export default view(ColorPicker)
