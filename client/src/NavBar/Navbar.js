import React from "react";
import { Link } from 'react-router-dom';
 

function Navbar(){
    return(
        <nav>
            <img src={"logo-actane.jpg"} />
            <ul className="liste">
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


            
        