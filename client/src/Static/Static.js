import React from "react";
import logo  from "./beachsunset.jpeg";
import logo1 from "./beach sunset.jpeg";
import logo2 from "./tortues.jpeg";
import logo3 from "./locationsjet.jpeg";
import {Link} from 'react-router-dom';
import './Static.css';


function Static() {
  return (
    <div className="static">
      <p className="demi">
        <strong>1/2 Journée à Sao Pedro:</strong>  Venez à la rencontre des tortues - réservation
        via le centre
      </p>
      <div className="block1">
        <h3>Sao Pedro</h3>
        <img src={logo} alt="SaoPedro" />
      </div>
      
      <h3>Vous aimerez</h3>

      <div className="pictures">
        <img src={logo2} alt="tortue" />
        <img src={logo1} alt="plagesunset" />
        <img src={logo3} alt="jetski" />
        
       
      </div>

      <p className="text">
        Découvrez toutes nos activités et location de jet-ski que nous pouvons
        vous proposez sur notre base de cap vert.<br/> Que ce soit pour une virée
        entre amis ou une simple sortie en famille, nos équipes vous attendent
        pour vous faire vivre de<br/>  belles sensations sur la Mer Sao Pedro.
        <Link to="/jetski">
        <button>Reservez</button>
        </Link>
      </p>
    </div>
  );
}

export default Static;
