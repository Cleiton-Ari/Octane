import React from 'react';
import MapContainer from "../Footer/MapContainer";
import logo0 from './instagram.png';
import logo1 from './facebook.png';
import logo2 from './snapchat.png';



const Footer = () => {
    return(
        <footer className="footer">
            <div className="follow-us">
                <h1>Follow-Us</h1>
                <p>Contactez-Nous?</p><br/>
                <p>Qui sommes-nous?</p><br/>
                <p>Conditions générales</p><br/>
                <p>Mentions légales</p>
            
                <img src={logo0} alt="insta" /> 
                <img src={logo1} alt="fb" />
                <img src={logo2} alt="snap" />
            <MapContainer/>
            </div>
        </footer>

    )
}

export default Footer;
