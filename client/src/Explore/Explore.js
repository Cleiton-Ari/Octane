import React from 'react';
import logo from './locationsjet.jpeg';
import logo1 from './saburalife.jpeg';
import {Link} from 'react-router-dom';
import './Explore.css';
 



const Explore = () => {
    return (
    <div className="component">
        <h2>DECOUVREZ NOS OFFRES</h2>
        <div className="carre">
        <Link to="/locations">
            <div className='locationsjet'>
                <img src={logo} alt="locations" /> 
            </div>
            <p>Locations</p>
        </Link>

        <h3>SABURA LIFE</h3>
        <Link to="/saburalife">
            <div className='saburalife'>
                <img src={logo1} alt="sabura" />
            </div>
            <p>Lorem ipsum..........</p>
        </Link>
        
 
        </div>
        
    </div> 
                
    )
}


export default Explore;