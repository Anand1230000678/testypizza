import React from 'react';
import { Link } from 'react-router-dom';
import BannerImage from "../img/pizza.jpeg"
import "../styles/Home.css"

export default function Home() {
  return (
    <div className='home' style={ {backgroundImage: `url(${BannerImage})`}}>
        <div className='headerContainer' 
        >
            <h1>Pedro's PiZZa</h1>
            <p>PIzzA To FiT AnY TaStE</p>
            <Link to="/menu">
            <button> ORDER NOW </button>
            </Link>

            </div> 
      
    </div>
  )
}
