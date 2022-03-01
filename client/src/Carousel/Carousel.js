import React from "react";
import "./Carousel.css";
import { Link } from 'react-router-dom';
import jet2 from './jet2.jpg';
import jetsafari from "./jet-ski-safari-9.jpg";
import jetski1 from "./jetski1.jpg";
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';


const slideImages = [
  {
    url: jet2,
    caption: "",
  },
  {
    url: jetsafari,
    caption: "",
  },
  {
    url: jetski1,
    caption: "",
  },
];

const properties = {
    duration: 4000,
    indicators: true,
    arrows: false,
}

function Carousel() {
    return (
      <div className="slideContainer">
        <Slide {...properties}>
          {slideImages.map((slideImage, index) => {
            return (
              <div className="slides" key={slideImage.index}>
                <div
                  className="images"
                  style={{
                    backgroundImage: `url(${slideImage.url})`,
                    height: "500px",
                    width: "100%",
                    backgroundRepeat: "no-repeat",
                  }}
                >
                  <span>{slideImage.caption}</span>
                </div>
              </div>
            );
          })}
        </Slide>
      
          <style>
            @import
            url('https://fonts.googleapis.com/css2?family=Permanent+Marker&display=swap');
          </style>
        
        <p className="titre">VENEZ VIBREZ SUR NOS PLUS PLAGES</p>
      </div>
    );
   
}




export default Carousel;