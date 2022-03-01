import React from 'react';

import logo0 from './instagram.png';
import logo1 from './facebook.png';
import logo2 from './snapchat.png';
import "./Footer.css"



const Footer = () => {
    return(
        <footer className="footer">
            <div className="follow-us">
                <p>Contactez-Nous?</p>
                <p>Qui sommes-nous?</p>
                <p>Conditions générales</p>
                <p>Mentions légales</p>
                <div className="icons">
                   <a href="https://www.instagram.com" target="_blank"><img src={logo0} alt="insta" /> </a> 
                   <a href="https://www.facebook.com" target="_blank"><img src={logo1} alt="fb" /></a> 
                   <a href="https://www.snapchat.com" target="_blank"><img src={logo2} alt="snap" /></a>
                </div>
            </div>
        </footer>

    )
}

export default Footer;
