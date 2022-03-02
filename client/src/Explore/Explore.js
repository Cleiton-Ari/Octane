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
        <Link to="/locations">
            <p className="loue">Locations</p>
            <div className='locationsjet'>
                <img src={logo} alt="locations" /> 
                <p>30 min de Jet-ski seul, ou entre amis</p>
                
            </div>  
        </Link>

        <Link to="/static">
            <p className="loue">Excursions</p>
            <div className='saburalife'>
                <img src={logo1} alt="turtle" />
                <p>Rencontre avec les tortues à São Pedro</p>
            </div>
        </Link>
            
        </div>
        
        <h3>SABURA LIFE: L'ADN DU CAP VERT</h3>

        <div className="carnaval">
            <img src={logo2} alt="carnaval" />
        </div>

        <div className="textcarnaval">
        <h4>Cap sur le Cap Vert!</h4>
            <p>Un archipel aux milles visages au large du Sénégal. Composé de 10 îles dont
             neuf<br/>habitées, entre plages de sable blanc, randonnées<br/> et festivités. 
             Cette ancienne colonie portugaise vous surprendra.</p>
        </div>

         
    </div> 
                
    )
}


export default Explore;