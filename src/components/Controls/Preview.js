// import React from 'react'
// import styled from 'styled-components'
// import { shape } from 'prop-types'
// import Store from '../../stores/Store'
// import Shape from './../Shape'

// import { view } from 'react-easy-state'

// import { colorStyles, transformStyles, circleStyles, triangleStyles } from './../styles'

// const PreviewStyled = styled.div`
//   width: 10px;
//   height: 10px;
//   ${p => colorStyles(p.s)}
//   ${p => p.s.shape === 'circle' && circleStyles()}
//   ${p => p.s.shape === 'triangle' && triangleStyles(p.s)}
//   ${p => `transform: ${transformStyles(p.s)}`}
// `

// const Preview = () => {
//   return Store.shapes.map((shape, i) => <PreviewStyled s={shape} className="Preview" />)

//   //   return <PreviewStyled s={currentShape} className="Preview" />
// }

// Preview.propTypes = {
//   currentShape: shape({})
// }
// export default view(Preview)
