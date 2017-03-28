import React from 'react'
import { Link } from 'react-router-dom'

const navItemStyle = {
  lineHeight: '60px',
  height: '60px',
  paddingTop: 0,
  fontSize: '24px',
  fontWeight: 'bold'
}

const Navbar = ({}) => (
  <nav class="navbar navbar-inverse" style={{marginBottom: 0, borderRadius: 0}}>

    <div class="navbar-header">
      <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
        <span class="sr-only">Toggle navigation</span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
      </button>

      <Link class="navbar-brand" to="/" style={navItemStyle}>Home</Link>
      
    </div>

    <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
      <ul class="nav navbar-nav">

        <li class="">
          <Link to="posters" style={navItemStyle}>PosterMaker</Link>
        </li>

        <li class="">
          <Link to="aanmelden" style={navItemStyle}>Aanmelden</Link>
        </li>

      </ul>
    </div>

  </nav>
)

export default Navbar