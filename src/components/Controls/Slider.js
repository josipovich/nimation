import React from 'react'
import Slider from 'rc-slider'

const styles = {
  handle: {
    borderRadius: '0px',
    border: 'none',
    width: '3px',
    outline: 'none',
    backgroundColor: '#c5c5af',
    boxShadow: 'none',
    marginLeft: '-1px',
    marginBottom: '1px'
  },
  track: {
    backgroundColor: '#c5c5af',
    height: '3px',
    borderRadius: '0'
  },
  rail: {
    backgroundColor: '#c5c5af',
    height: '1px',
    marginTop: '1px'
  }
}

const Component = props => {
  return (
    <div className="Slider">
      <label className="Label">{props.label}</label>
      <Slider
        {...props}
        handleStyle={styles.handle}
        trackStyle={styles.track}
        railStyle={styles.rail}
      />
    </div>
  )
}

export default Component
