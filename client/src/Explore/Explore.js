import React from 'react';
import logo from './locationsjet.jpeg';
import logo1 from './saburalife.jpeg';
import logo2 from './carnaval.jpeg';
import rate from './rate.png';
import {Link} from 'react-router-dom';
import './Explore.css';
 



const Explore = () => {
    return (
    <div className="component">
        <h2>DECOUVREZ NOS OFFRES</h2>
        <div className="carre">
        <Link to="/locations">
            <p>Locations</p>
            <div className='locationsjet'>
                <img src={logo} alt="locations" /> 
            </div>  
        </Link>

            <div className='rate'>
                <p>lorem iudbd</p>
                <img src={rate} alt="rate" />
            </div>

        
        <Link to="/saburalife">
            <p>Excursions</p>
            <div className='saburalife'>
                <img src={logo1} alt="sabura" />
            </div>
        </Link>
            <div className='rate'>
                <p>lorem iudbd</p>
                <img src={rate} alt="rate" />
            </div>
        </div>
        
        <h3>Vivez la Sabura life</h3>
        <div className="carre2">
            <img src={logo2} alt="carnaval" />
            <p>Lorem ipsum</p>
        </div>
        
        
    </div> 
                
    )
}


export default Explore;