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
                    <button>Reservez</button>
                </div>

                <div className="thejets">
                <img src={logo1} alt="Seadoo" />
                    <p>Seadoo</p>
                    <button>Reservez</button>
                </div>

                <div className="thejets">
                <img src={logo2} alt="Yamaha" />
                    <p>Yamaha</p>
                    <button>Reservez</button>
                </div>
          </>
        );
    };
}


export default JetSki;