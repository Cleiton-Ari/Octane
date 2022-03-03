import React from "react";
import logo from './intro.jpeg';
import logo1 from './Cese.jpeg';
import './Capvert.css';

function Capvert() {
    return (
      <div>
      <div className="blog">
      <div className="intro-img">
         
      </div>
      <img src={logo} alt="intro" />

      <h4>A la croisée des trois continents, le Cap Vert un archipel authentique.</h4>
        
  <article>
      <h5>Quand partir au cap vert?</h5>
      <p>Ce sont quelques 4 200 kilomètres qui séparent la France du Cap-Vert. Situé au large des côtes du
       Sénégal, dans l'océan Atlantique, ce pays bénéficie de températures agréables toute l'année,<br/> grâce à un

        climat tropical semi-désertique. Attention toutefois aux vents violents omniprésents et à la courte

         saison des pluies, entre août et octobre.<br/> Pour se rendre au Cap Vert, il vous sera demandé un passeport 

         valable encore 6 mois après votre séjour. Le visa n'est pas nécessaire si vous restez 30 jours ou moins. Il

          est également<br/> obligatoire de faire votre pré-enregistrement sur un site gouvernemental, cinq jours
           avant votre voyage.

          L'archipel comprend dix îles, dont neuf sont habitées.<br/> Ces îles sont réparties en deux groupes, selon
           leur position face aux alizés :<br/>



          .Au nord, les îles au vent (Barlavento) : Santo Antão (ou São Antão), São Vicente, São Nicolau,
           Santa Luzia, Sal et Boa Vista<br/>
          .Au sud, les îles sous le vent (Sotavento) : Santiago, Maio, Fogo et Brava
      </p>
      <h5>Zoom sur Sao-Vicente</h5>
      <p>Située au nord du Cap-Vert, l’île de São Vicente est la deuxième plus peuplée de l’archipel et un concentré 
      d’authenticité. On vient y admirer les pêcheurs à l’ouvrage, y déguster un grand choix de fruits de mer et y profiter
       de plages somptueuses. São Vicente, c’est aussi une foule de festivités, des villes fascinantes, de jolies plages,
        l’ombre de Cesaria Evora, une atmosphère enivrante… Bref, un passage incontournable lors d’un combiné d’îles au Cap-Vert.



      São Vicente est sans conteste l’île la plus animée de l’archipel avec sa vie nocturne effervescente, ses événements culturels
       et ses nombreux bars et discothèques. Elle accueille de nombreux artistes et musiciens, inspirés par la quiétude et l’ambiance
        féerique de la région. Parmi eux, Cesaria Evora est probablement l’ambassadrice de l’île la plus connue. Née à Mindelo en 1941,
         elle met souvent ses origines à l’honneur dans ses chansons et revient régulièrement à São Vicente pour donner des concerts et 
         assister au Carnaval. Vous pourrez d’ailleurs visiter sa maison, transformée en musée, où sont exposés certains des souvenirs
          de la diva aux pieds nus.</p>
          
  </article>
  <img src={logo1} alt="Cese" className="cese"/> 
         
      </div>
          
      </div>
    );
  }


  export default Capvert;