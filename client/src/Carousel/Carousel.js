import React from "react";
import "./Carousel.css";
import { Link } from 'react-router-dom';
import logo from './carousel.jpeg'
import { Slide } from 'react-slideshow-image'

const slideImages = [
  "Carousel/flyboarder.jpg",
  "Carousel/jetstanding.jfif",
  "Carousel/carousel.jpeg",
];
// a refaire

function Carousel() {
    return (
      <div>
        <Slide>
          <div>${slideImages[0]}</div>
          <div>${slideImages[1]}</div>
          <div>${slideImages[2]}</div>

          <p>VENEZ VIBREZ SUR NOS PLUS PLAGES C</p>
        </Slide>
      </div>
    );
   
}




export default Carousel;