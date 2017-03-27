import react from 'react'
import { HashRouter, Route } from 'react-router-dom'

import Navbar from './Components/Navbar'
import Jumbotron from './Components/Jumbotron'
import Layout from './Pages/Layout'
import Home from './Pages/Home'
import Posters from './Pages/Posters'
import Register from './Pages/Register'
import { lightRed } from './Colors'

const SubTitle = () => (
  <span>
    Een campagne van de <a href="www.bondprecairewoonvormen.nl">Bond Precaire Woonvormen</a>
  </span>
)

const App = () => {

  //console.log('hi ' + hashHistory)
  
  return (
  <div style={{backgroundColor: lightRed}}>
    <HashRouter>
      <div>
        <Navbar/>
        <Jumbotron title="FuckFlex" subtitle={<SubTitle/>}/>
        <div className="container">
          <Route exact path="/" component={Home}></Route>
          <Route path="/posters" component={Posters}></Route>
          <Route path="/aanmelden" component={Register}></Route>
        </div>
      </div>
    </HashRouter>
  </div>
)}

export default App