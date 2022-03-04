//real cmpnt
import React from 'react';
import "./JetSki.css";
import axios from "axios";
import {CircularProgress} from "react-cssfx-loading";
import { Link } from "react-router-dom";

//component jetski
class JetSki extends React.Component {
    state = {
        userId: "",
        jetskiId: "",
        jetskiList:[]
    };

    componentDidMount = () => {
        axios
        .get(`${process.env.REACT_APP_APIURL || ""}/api/jetski`) 
        .then((response) =>{
            this.setState({
                    jetskiList: response.data.jetskiList,
            });
        })
        .catch((error) =>{
            console.log(error);
        });
        
    }

    reserveButtonClick = (event, props) => {
        // some code
        const jetskiId = event.target.id
        this.props.chooseJetski(jetskiId)
    }
    
    render = () => {
        if (this.state.jetskiList.length <= 0){
            return (
               
                <>
                  <div className="loading-container" style={{display: "flex"}}>
                      <CircularProgress style={{alignItems: "center", margin: "auto"}}/>
                  </div>
                </>
              )

        }
        return(
          <div className="jet">
                 <h1>LOCATIONS</h1>
               {
                this.state.jetskiList.map((jetski) => {
                return(
                    <div className="listing" key={jetski._id}>
                    <img src={`${process.env.REACT_APP_APIURL || ""}/api/jetski/${jetski.photoRoute}`} alt={jetski.make} style={{height:"auto", width:'150px'}}/>
                        <h4>{jetski.make}</h4>
                        <p>{jetski.description}</p>
                        
                        <Link to='/reservation'>
                            <button className="reservation-button" id={jetski._id} onClick={this.reserveButtonClick}>Reservez</button>
                        </Link>
                    </div>
                )
            })
               }
               
               
          </div>
        );
    };
}


export default JetSki;

//                          (App) <= (function ) => prop => Jetski
//                  /         |                \
//       (reservation)      (JetSki)           (Panier)  
//                              |
//                             {JetskiID, userId, jetskiList}