import React from 'react'
import { MenuList } from "../help/MenuList";
import MenuItem from "../component/MenuItem"
import "../styles/Menu.css"
export default function Menu() {
  return (
    <div className='menu'>
      
      <h1 className='menuTitle'>OUR MENU</h1>
      <div className='menuList'>
        {MenuList.map((menuItem,key)=>{
        return <MenuItem key={key} image={menuItem.image} name={menuItem.name} price={menuItem.price}/> })}

      </div>
   
      
    </div>
  )
}

