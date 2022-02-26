import axios from 'axios';
import React from 'react';
import {CircularProgress} from "react-cssfx-loading";




class ReservationDetails extends React.Component{
    state = {
        reservationData: [],
        reservationId: ""
    }

    componentDidMount = (props) => {
        const id = this.props.match.params.id
        axios.get(`http://localhost:5005/api/reservation/${id}`)
            .then(response => {
                this.setState({
                    reservationData: response.data.reservationFromDb
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
            <h1>Your reservation details</h1>
            <ul>
                <li>User ID: {this.state.reservationData.userId}</li>
                <li>Jetski ID: {this.state.reservationData.jetskiId}</li>
                <li>from : {this.state.reservationData.fromDate}</li>
                <li>to : {this.state.reservationData.toDate}</li>

            </ul>
            </>
        )
    }
}


export default ReservationDetails;