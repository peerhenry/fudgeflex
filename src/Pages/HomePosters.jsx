import React from 'react'
import HomeImage from 'components/HomeImage'

const sbs = 'http://bondprecairewoonvormen.nl/wp-content/uploads/2016/12/stef-blok.jpg'

const HomePosters = ({}) => (
  <div class="row" style={{margin: 'auto', marginBottom: '80px'}}>
    <div class="col-xs-6 col-md-4" style={{marginBottom: '20px'}}>
      <HomeImage altText={'fuck-flex'} source={'img/ff-poster-dummy-black.png'}/>
    </div>
    <div class="col-xs-6 col-md-4" style={{marginBottom: '20px'}}>
      <HomeImage altText={'stef-blok'} source={sbs}/>
    </div>
    <div class="col-xs-6 col-md-4" style={{marginBottom: '20px'}}>
      <HomeImage altText={'niet-te-koop'} source={'img/ntk.png'}/>
    </div>
  </div>
)

export default HomePosters