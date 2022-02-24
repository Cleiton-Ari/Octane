import React from 'react';
import "./JetSki.css";
import logo from "./Kawasaki.jpeg";
import logo1 from "./seddoo2.jpeg";
import logo2 from "./yamaha.jpeg";

//component jetski
class JetSki extends React.Component {
    state = {
        Iduser: "",
        Idjetski: ""
    };

    componentDidMount = () => {
        //axios
        
    }
    render() {
        return(
          <>
                <h1>LOCATIONS</h1>
                <div className="thejets">
                <img src={logo} alt="Kawasaki" />
                    <p>Kawasaki</p>
                    <p>auto gearbox 120 km/h</p>
                    <button>Reservez</button>
                </div>

                <div className="thejets">
                <img src={logo1} alt="Seadoo" />
                    <p>Seadoo</p>
                    <p>spark cdo speed 90 km/h</p>
                    <button>Reservez</button>
                </div>

                <div className="thejets">
                <img src={logo2} alt="Yamaha" />
                    <p>Yamaha</p>
                    <p>250 hp with dual exhaust system max speed 100 km/h</p>
                    <button>Reservez</button>
                </div>

                <div className="thejets">
                <img src={logo2} alt="Yamaha" />
                    <p>Yamaha</p>
                    <p>turbo jet 140 km/h</p>
                    <button>Reservez</button>
                </div>
          </>
        );
    };
}


export default JetSki;