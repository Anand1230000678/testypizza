import Logo from "../img/pizzaLogo.png";
import ReorderIcon from '@mui/icons-material/Reorder';
import '../styles/Navbar.css';

import { useState } from "react";
import { Link } from "react-router-dom";
export default function Navbar() {
  const [openLinks,setOpenLink] = useState(false);
  const toggleNavbar = ()=>{
    setOpenLink(!openLinks);
  };
  return (
    <div className="navbar">
        <div className="leftSide" id={openLinks ? "open" : "close"}>
            <img src={Logo}  />
            <div className="hiddenLinks">
            <Link to='/'>Home</Link>
            <Link to="/menu">Manu</Link>
            <Link to="/about">About</Link>
            <Link to="/contect">Contect</Link>
            </div>
        </div>
        <div className="rightSide">
        <Link to="/">Home</Link>
        <Link to="/menu">Manu</Link>
        <Link to="/about">About</Link>
        <Link to="/contect">Contect</Link>
          <button onClick={toggleNavbar}>
            <ReorderIcon/>
          </button>

        </div>
      
    </div>
  );
}
