import react from 'react'
import { HashRouter, Route } from 'react-router-dom'

import Navbar from './Components/Navbar'
import Home from './Pages/Home'
import Posters from './Pages/Posters'
import Register from './Pages/Register'
import { lightRed } from './Colors'

const footerStyle = {
  color: 'white', 
  background: '#101010'
}

const wrapperStyle = {
  backgroundColor: lightRed,
  //backgroundImage: 'url(img/a1.jpg)',
  backgroundSize: '100%'
}

const mainStyle = {
  backgroundColor: "rgba(253, 223, 166 , 0.85)",
}

const App = () => {
  return (
  <div class="wrapper" style={wrapperStyle}>

    <div class="main" style={mainStyle}>
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

    <div class="footer" style={footerStyle}>
      <div className="container" style={{padding: '10px'}}>
        <p class="text-muted footer" >Bond Precaire Woonvormen</p>
      </div>
    </div>

  </div>
)}

export default App