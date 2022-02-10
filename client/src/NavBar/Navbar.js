import React from "react";
import { Link } from 'react-router-dom';
import "./Navbar.css"
 

function Navbar() {
    return(
        <nav>
           
            <ul className="liste">
            <img src='../../public/logo-octane.JPG' alt= "logo" className="navbar-logo" />
            <li className="items">
                    <Link to="/Blog">Blog</Link>
                </li>

                <li className="items">
                    <Link to="/Signup">Signup</Link>
                </li>
                <li className="items">
                    <Link to="/Login">Login</Link>
                </li>
            </ul>
        
        </nav>
    )
}


export default Navbar;


            
        