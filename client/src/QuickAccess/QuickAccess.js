import React from 'react';
import logo from './panier.png';
import logo1 from './jet.png';
import logo2 from './capvert.png';
import {Link} from 'react-router-dom';
import './QuickAccess.css';



//TODO
/*
declare routes panier, jet, capvert => reactr avec les cmpsts (APP.js) + css
panier => class component avec state.

*/


const QuickAccess = () => {
    return (
    <div className="access">
        <Link to="/panier">
            <div className='panier imgs'>
                <img src={logo} alt="panier" /> 
                <p>Fast booking</p>
            </div>
        </Link>

        <Link to="/jetski">
            <div className='jet imgs'>
                <img src={logo1} alt="jet" />
                <p>100% Experience</p>
            </div>
        </Link>

        <Link to="/capvert">
            <div className='capvert imgs'>
                <img src={logo2} alt="capvert" />
                <p>Sabura life</p>
            </div>
        </Link>
    </div> 
                
    )
}



export default QuickAccess;