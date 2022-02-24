//real cmpnt
import React from 'react';
import "./JetSki.css";
import axios from "axios";
import {CircularProgress} from "react-cssfx-loading";

//component jetski
class JetSki extends React.Component {
    state = {
        userId: "",
        jetskiId: "",
        jetskiList:[]
    };

    componentDidMount = () => {
        axios
        .get("http://localhost:5005/api/jetski")
        .then((response) =>{
            this.setState({
                    jetskiList: response.data.jetskiList,
            });
        })
        .catch((error) =>{
            console.log(error);
        });
        
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
          <>
                 <h1>LOCATIONS</h1>
               {
                this.state.jetskiList.map((jetski) => {
                return(
                    <div key={jetski._id}>
                    <img src={jetski.photo} alt={jetski.make} />
                        <h4>{jetski.make}</h4>
                        <p>{jetski.description}</p>
                        <button>Reservez</button>
                    </div>
                )
            })
               }
               
               
          </>
        );
    };
}


export default JetSki;