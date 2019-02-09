import React, { Component } from 'react'
import Ctor from './Ctor'
import { view } from 'react-easy-state'
import Store from './Store'

// const positions = ['top', 'bottom', 'left', 'right']
const Nimation = () => {
  const styles = {
    animation: `spin ${Store.animationSpeed}s linear infinite`
  }
  return (
    <div style={styles} className="Nimation">
      {Store.ctors.map((ctorProps, id) => (
        <Ctor {...ctorProps} />
      ))}
    </div>
  )
}

export default view(Nimation)
