import React from 'react'
import Jumbotron from 'bootstrap/Jumbotron'
import Container from 'bootstrap/Container'
import Panel from 'bootstrap/Panel'
import { mainRed, lightRed } from '../Colors'
import HomePosters from './HomePosters'

const iu = "http://www.winhotels.com/includes/sliders/homepage-slider-engels_files/images1/enjoyamsterdam.jpg";
const i1 = "img/a1.jpg";
const i2 = "img/a2.jpg";
const i3 = "img/tk2.jpg";

const JumbotronWrapperStyle = {
  height: '100%',
  color: lightRed,
  backgroundImage: "url("+ i3 + ")",
  marginBottom: '20px',
  backgroundSize: '100%'
}

const JumbotronOverlay = {
  height: '100%',
  backgroundColor: "rgba(33, 2, 2 , 0.6)"
}

const JumbotronStyle = {
  backgroundColor: 'transparent' 
}

const Home = ({}) => (
  <div>

    <div style={JumbotronWrapperStyle}>
      <div style={JumbotronOverlay}>

        <Jumbotron styleObject={JumbotronStyle}>
            <Container>
              <h1>
                <strong style={{color: 'yellow'}}>FUCKFLEX</strong>
              </h1>
              <p>
                <span>
                  Een campagne van de <a style={{color: 'white'}} href="http://www.bondprecairewoonvormen.nl">Bond Precaire Woonvormen</a>
                </span>
              </p>
            </Container>
        </Jumbotron>

      </div>
    </div>
    

    <Container>
      <Panel>
        <p class="lead">
          Door politiek beleid zijn er steeds minder sociale huurwoningen, waardoor de woonzekerheid snel wordt afgebroken. Veel mensen zitten in een stoelendans op de woningmarkt en worden van flexwoning naar flexwoning steeds zonder huurrecht uit huis gezet. Sluit je nu aan bij de campagne voor bestaanszekerheid en goede huisvesting voor iedereen. Wonen is een recht, geen gunst! #FUCKFLEX
        </p>
      </Panel>

      <HomePosters/>
    </Container>
  
  </div>
)

export default Home