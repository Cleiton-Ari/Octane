import React from 'react';
import {Link} from 'react-router-dom';
import NavBar from '../NavBar/Navbar';
import Carousel from '../Carousel/Carousel';
import Footer from '../Footer/Footer';



function HomePage() {
    return(
        <div>
        <Carousel /> 
        <Footer />    
        </div>
    )
}


export default HomePage;