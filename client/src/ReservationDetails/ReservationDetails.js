import axios from 'axios';
import React from 'react';
import {CircularProgress} from "react-cssfx-loading";
import QRCode from "react-qr-code";



class ReservationDetails extends React.Component{
    state = {
        reservationData: [],
        reservationId: ""
    }

    componentDidMount = (props) => {
        const id = this.props.match.params.id
        axios.get(`${process.env.REACT_APP_APIURL || ""}/api/reservation/${id}`) 
            .then(response => {
                this.setState({
                    reservationData: response.data.reservationFromDb,
                    reservationId: id
                })
            })
            .catch(error => console.log(error))
    }

    render = () => {
        if (this.state.reservationData.length <= 0) {
            return (
                <>
                    <div className="loading-container" style={{display: "flex"}}>
                    <CircularProgress style={{alignItems: "center", margin: "auto"}}/>
          </div>
        </>
            )
        }
        
        return (
            <>
            <h1>Votre réservation</h1>
            <ul>
                <li>User ID: {this.state.reservationData.userId}</li>
                <li>Jetski ID: {this.state.reservationData.jetskiId}</li>
                <li>from : {this.state.reservationData.fromDate}</li>
                <li>to : {this.state.reservationData.toDate}</li>
                <QRCode value={`https://octane-jet.herokuapp.com/reservation-details/${this.state.reservationId}`} />
            </ul>
            </>
        )
    }
}


export default ReservationDetails;