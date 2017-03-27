import react from 'react'

import { mainRed, lightRed } from '../Colors'

const Jumbotron = ({title, subtitle}) => (
  <div className="jumbotron" style={{backgroundColor: mainRed, color: lightRed}}>
    <div className="container">
      <h1>
        <strong>{title}</strong>
      </h1>
      <p>{subtitle}</p>
    </div>
  </div>
)

export default Jumbotron