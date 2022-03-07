import React from 'react';
import logo from './locationsjet.jpeg';
import logo1 from './turtle.jpeg';
import logo2 from './carnaval.jpeg';
import {Link} from 'react-router-dom';
import './Explore.css';
 



const Explore = () => {
    return (
    <div className="component">
        <h2> NOS OFFRES </h2>
        <div className="activity">
        <Link to="/jetski">
            <p className="loue">Rentals</p>
            <div className='locationsjet'>
                <img src={logo} alt="locations" /> 
                <p>30 minutes of Jet-skiing alone, or with friends</p>
                
            </div>  
        </Link>

        <Link to="/static">
            <p className="loue">Excursion</p>
            <div className='locationsjet'>
                <img src={logo1} alt="turtle" />
                <p>Turtles watching in São Pedro</p>
            </div>
        </Link>
            
        </div>
        
        <h3>SABURA LIFE: Cape Verdean DNA</h3>

        <div className="carnaval">
            <img src={logo2} alt="carnaval" />
            <div className="textcarnaval">
                <h4>Discover CapVerdean Islands!</h4>
                <p> An archipelago with multiple faces front of Senegal coast. Made up of 10 islands
                nine<br/>of which are inhabited, between white sandy beaches, hiking and festivities.<br/> 
                This former Portuguese colony will surprise you..</p>
            </div>
        </div>
         
    </div> 
                
    )
}


export default Explore;