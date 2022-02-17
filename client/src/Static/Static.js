import React from "react";
import logo  from "./beachsunset.jpeg";
import logo1 from "./beach sunset.jpeg";
import logo2 from "./tortues.jpeg";
import logo3 from "./locationsjet.jpeg";
import './Static.css';


function Static() {
  return (
    <div className="static">
      <p className="demi">
        1/2 Journée a Sao Pedro: Venez à la rencontre<br/> des tortues - réservation
        via le centre
      </p>
      <div className="block1">
        <h3>Sao Pedro</h3>
        <img src={logo} alt="SaoPedropic" />
      </div>
      
      <h3>Vous aimerez :</h3>

      <div className="pictures">
        <img src={logo2} alt="tortue" />
        <img src={logo1} alt="plagesunset" />
        <img src={logo3} alt="jetski" />
      </div>

      <p className="text">
        Découvrez toutes nos activités et location de jet-ski que<br/> nous pouvons
        vous proposez sur notre base de cap vert.<br/> Que ce soit pour une virée
        entre amis ou une simple sortie<br/> en famille, nos équipes vous attendent
        pour vous faire<br/> vivre de belles sensations sur la Mer Sao Pedro.
      </p>
    </div>
  );
}

export default Static;
