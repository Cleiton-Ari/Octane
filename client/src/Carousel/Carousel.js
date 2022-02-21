import React from "react";
import "./Carousel.css";
import { Link } from 'react-router-dom';
import leMec from './lemec.jpeg';
import flyboarder from "./flyboarder.jpg";
import jetStanding from "./jetstanding.jpg";
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';


const slideImages = [
    {
        url: leMec,
        caption: "Le mec",
    },
    {
        url: flyboarder,
        caption: "flybording",
    },
    {
        url: jetStanding,
        caption: "jetStanding",
    }
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
                    <div className="images" style={{'backgroundImage': `url(${slideImage.url})`, height: '500px', backgroundRepeat: 'no-repeat'}}>
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