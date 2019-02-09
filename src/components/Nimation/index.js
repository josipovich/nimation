import React from 'react'
import { view } from 'react-easy-state'
import Ctor from '../Ctor'
import Store from '../../stores/Store'

const Nimation = () => {
  const styles = {
    animation: `spin ${Store.animationSpeed}s linear infinite`
  }
  return (
    <div style={styles} className="Nimation">
      {Store.ctors.map(ctorProps => (
        <Ctor {...ctorProps} />
      ))}
    </div>
  )
}

export default view(Nimation)
