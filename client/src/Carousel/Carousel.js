import React from "react";
import "./Carousel.css";
import { Link } from 'react-router-dom';
import leMec from './lemec.jpeg';
import jetsafari from "./jet-ski-safari-9.jpg";
import jetski1 from "./jetski1.jpg";
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';


const slideImages = [
  {
    url: leMec,
    caption: "Le mec",
  },
  {
    url: jetsafari,
    caption: "jetsafari",
  },
  {
    url: jetski1,
    caption: "jetski1",
  },
];

const properties = {
    duration: 3000,
    indicators: true,
    arrows: false,
}

function Carousel() {
    return (
      <div className="slideContainer">
        <Slide {...properties} >
          {slideImages.map((slideImage, index) => {
              return (
                  <div className="slides" key={slideImage.index}>
                    <div className="images" style={{'backgroundImage': `url(${slideImage.url})`, height: '300px', backgroundRepeat: 'no-repeat'}}>
                        <span>{slideImage.caption}</span>
              </div>
                  </div>
              )
          })}
        </Slide>
        <p>VENEZ VIBREZ SUR NOS PLUS PLAGES C</p>
      </div>
    );
   
}




export default Carousel;