import React from "react";
import { logo } from "./beachsunset.jpeg";
import { logo1 } from "./beach sunset.jpeg";
import { logo2 } from "./tortues.jpeg";
import { logo3 } from "./locationsjet.jpeg";

function Static() {
  return (
    <div>
      <p>
        1/2 Journée a Sao Pedro: Venez à la rencontre des tortues - réservation
        via le centre
      </p>
      <h3>Sao Pedro</h3>
      <img src={logo} alt="SaoPedropic" />
      <h3>Vous aimerez</h3>
      <div>
        <img src={logo1} alt="tortue" />
        <img src={logo2} alt="plagesunset" />
        <img src={logo3} alt="jetski" />
      </div>

      <p>
        Découvrez toutes nos activités et location de jet-ski que nous pouvons
        vous proposez sur notre base de cap vert. Que ce soit pour une virée
        entre amis ou une simple sortie en famille, nos équipes vous attendent
        pour vous faire vivre de belles sensations sur la Mer Sao Pedro.
      </p>
    </div>
  );
}

export default Static;
