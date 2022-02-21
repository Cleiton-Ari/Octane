import React from "react";
import "./Carousel.css";
import { Link } from 'react-router-dom';
import {logo} from './carousel.jpeg'
import { Slide } from 'react-slideshow-image'

/*const slideImages = [
  "./Carousel/flyboarder.jpg",
  "./Carousel/jetstanding.jfif",
  "/.Carousel/carousel.jpeg",
];*/
// a refaire

function Carousel() {
    return (
      <div className="slideContainer">
        <Slide>
          <img src="./Carousel/flyboarder.jpg" alt=""/>
          

          <p>VENEZ VIBREZ SUR NOS PLUS PLAGES C</p>
        </Slide>
      </div>
    );
   
}




export default Carousel;