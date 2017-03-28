import React from 'react'

const Jumbotron = ({children, styleObject}) => (
  <div className="jumbotron" style={styleObject}>
    {children}
  </div>
)

export default Jumbotron