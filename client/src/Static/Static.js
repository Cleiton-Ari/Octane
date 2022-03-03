import React from "react";
import  saopedro  from "./sao-pedro.jpg";
import beach from "./beach sunset.jpeg";
import tortue from "./tortues.jpeg";
import jet from "./locationsjet.jpeg";
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
        <img src={saopedro} alt="SaoPedro" />
      </div>
      
      <h3>Vous aimerez</h3>

      <div className="pictures">
        <img src={tortue} alt="tortue" />
        <img src={beach} alt="plagesunset" />
        <img src={jet} alt="jetski" />
        
       
      </div>

      <div className="description">
            <p className="text">
              Découvrez toutes nos activités et location de jet-ski que nous pouvons
              vous proposez sur notre base de cap vert.<br/> Que ce soit pour une virée
              entre amis ou une simple sortie en famille, nos équipes vous attendent
              pour vous faire vivre de<br/>  belles sensations sur la Mer Sao Pedro.
              
            </p>
            <Link to="/jetski">
              <button>Reservez</button>
              </Link>
      </div>

      
    </div>
  );
}

export default Static;
