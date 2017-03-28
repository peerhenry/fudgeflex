import React from 'react'

const HomeImage = ({source, altText}) => (
  <img 
    style={{display: 'block', marginLeft: 'auto', marginRight: 'auto', border: '3px solid black'}} 
    //src="http://bondprecairewoonvormen.nl/wp-content/uploads/2016/12/stef-blok.jpg" 
    alt={altText}
    width="283" //800
    height="400" //1132
    //srcSet="http://bondprecairewoonvormen.nl/wp-content/uploads/2016/12/stef-blok-283x400.jpg 283w, http://bondprecairewoonvormen.nl/wp-content/uploads/2016/12/stef-blok-768x1087.jpg 768w, http://bondprecairewoonvormen.nl/wp-content/uploads/2016/12/stef-blok-565x800.jpg 565w, http://bondprecairewoonvormen.nl/wp-content/uploads/2016/12/stef-blok.jpg 800w" 
    src={source}
    sizes="(max-width: 800px) 100vw, 800px"/>
)

export default HomeImage