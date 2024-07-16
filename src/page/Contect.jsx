import React from 'react'
import PizzaLeft from "../img/pizzaLeft.jpg"
import "../styles/Contact.css"
export default function Contect() {
  return (
    <div className='contect'>
       <div className='leftSide'  style={ {backgroundImage: `url(${PizzaLeft})`}}>  
       </div>
        <div className='rightSide'>
            <h1>CONTACT US</h1>

            <form id='contact-from' method='POST'>
                <label htmlFor="name">Full Name</label>
                <input type="text" name='name' placeholder='Enter full name... '/>
                <label htmlFor="email" >Email</label>
                <input type="email" placeholder='Entar your email...' />
                <label htmlFor="message">Message</label>
                <textarea name="message" id="" placeholder='Enter your massage...' rows="6"></textarea>
                <button>Send Massage</button>

            </form>

        </div>

     

      
    </div>
  )
}
