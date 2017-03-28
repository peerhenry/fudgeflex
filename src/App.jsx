import react from 'react'
import { HashRouter, Route } from 'react-router-dom'

import Navbar from './Components/Navbar'
import Home from './Pages/Home'
import Posters from './Pages/Posters'
import Register from './Pages/Register'
import { lightRed } from './Colors'

const footerColor = {
  color: 'white', 
  background: 'black'
}

const App = () => {
  return (
  <div class="wrapper" style={{backgroundColor: lightRed}}>

    <div class="main">
      <div className="box">
        <HashRouter>
          <div>
            <Navbar/>
            <Route exact path="/" component = {Home}></Route>
            <div className="container">
              <Route path="/posters" component = {Posters}></Route>
              <Route path="/aanmelden" component = {Register}></Route>
            </div>
          </div>
        </HashRouter>
      </div>
    </div>

    <div class="footer" style={footerColor}>
      <div className="container">
        <p class="text-muted footer">Bond Precaire Woonvormen</p>
      </div>
    </div>

  </div>
)}

export default App