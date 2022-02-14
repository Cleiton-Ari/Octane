import React from "react";
import "./Carousel.css";
import { Link } from 'react-router-dom';
import logo from './carousel.jpeg'

function Carousel() {
    return(
        <>
            <img src={logo} alt= "logo" className="carousel" />

            <p>VIBREZ SUR NOS PLAGES CAPVERDIENNES</p>
        </>
    )
   
}




export default Carousel;