import React from 'react';
import logo from './locationsjet.jpeg';
import logo1 from './saburalife.jpeg';
import {Link} from 'react-router-dom';
import './Components.css';
 



const Components = () => {
    return (
    <div className="component">

        <h2>DECOUVREZ NOS OFFRES</h2>
        <Link to="/locations">
        <p>Locations</p>
            <div className='locationsjet'>
                <img src={logo} alt="locations" /> 
            </div>
        </Link>

        <h2>SABURA LIFE</h2>
        <Link to="/saburalife">
            <div className='saburalife'>
                <img src={logo1} alt="sabura" />
                <p>Lorem ipsum..........</p>
            </div>
        </Link>
 
    </div> 
                
    )
}


export default Components;