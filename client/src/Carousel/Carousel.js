import React from "react";
import "./Carousel.css";
import { Link } from 'react-router-dom';
import logo from './carousel.jpeg'

function Carousel() {
    return(
        <div>
            <img src={logo} alt= "logo" className="carousel" />

            <p>VENEZ VIBREZ SUR NOS PLUS PLAGES C</p>
        </div>
    )
   
}




export default Carousel;