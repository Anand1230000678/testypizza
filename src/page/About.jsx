import React from 'react'
import MultiPizza from "../img/margherita.jpg";
import "../styles/About.css"


export default function About() {
  return (
    <div className='about'>
        <div className='aboutTop' style={ {backgroundImage: `url(${MultiPizza})`}}>
        </div>  
        <div className='aboutBottom'>
        <h1>ABOUT US</h1>
        <p>In the vibrant cityscape of Noida, where the pulse of urban life thrives, 
            "Renderpizza" stands as an oasis of culinary delight.
             Situated amidst the dynamic streets and bustling avenues, 
             our restaurant beckons with the promise of exceptional pizza experiences.
              As patrons traverse the lively thoroughfares, the inviting aroma of freshly 
              baked crust and savory toppings wafts through the air, drawing them closer to
               our culinary haven. "Renderpizza" embraces the spirit of Noida, blending 
               modern sophistication with a welcoming ambiance that mirrors the city's 
               diverse and vibrant culture. Within our walls, guests discover a culinary 
               journey that celebrates the rich tapestry of flavors from around the world, expertly crafted into each delectable slice of pizza. 
              </p>
          </div>
      
    </div>
  )
}
