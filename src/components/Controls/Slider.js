import React from 'react'
import Slider from 'rc-slider'
import styled from 'styled-components'
import { CSS } from 'consts'

const styles = {
  handle: {
    borderRadius: '0px',
    border: 'none',
    width: '3px',
    outline: 'none',
    backgroundColor: CSS.white,
    boxShadow: 'none',
    marginLeft: '-1px',
    marginBottom: '1px'
  },
  track: {
    backgroundColor: CSS.white,
    height: '3px',
    borderRadius: '0'
  },
  rail: {
    backgroundColor: CSS.white,
    height: '1px',
    marginTop: '1px'
  }
}

const SliderStyled = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  margin-bottom: 0.5rem;
`

const Label = styled.label`
  margin-right: 1rem;
  white-space: nowrap;
`

const Component = props => {
  return (
    <SliderStyled>
      <Label>{props.label}</Label>
      <Slider
        {...props}
        handleStyle={styles.handle}
        trackStyle={styles.track}
        railStyle={styles.rail}
      />
    </SliderStyled>
  )
}

export default Component
