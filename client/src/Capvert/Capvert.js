import React from "react";
import logo from './cartecv.png';
import './Capvert.css';

function Capvert() {
    return (
      <div>
      <h2>Découvrez les îles du Cap Vert</h2>
      <div className="carte">
      <p>Le Cap Vert est un archipel de dix îles volcaniques<br/> 
          dont chacune possède sa spécificité. On peut<br/>
          néanmoins les regrouper selon leur topographie : il<br/>
          y a les îles plates aux immenses plages telles<br/>
          que Sal, Boa Vista et Maio puis il y a les îles aux<br/>
          reliefs plus prononcés comme Santiago, Fogo,<br/>
          Brava, Sao Nicolau et Santo Antao. A côté de cela<br/>
          restent deux îles : Sao Vicente, l’île des Arts avec la<br/>
          ville animée de Mindelo et Santa Luzia, une île<br/>
          déserte difficilement accessible pleine de légendes<br/>
          et de mystères.</p>
          <img src={logo} alt="cartecv" /> 
      </div>
          
      </div>
    );
  }


  export default Capvert;