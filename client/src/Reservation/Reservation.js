import axios from "axios";
import React from "react";
import {CircularProgress} from "react-cssfx-loading";

class Reservation extends React.Component {
  state = {
    Firstname: "",
    email: "",
    reservationList: [],
  };

  componentDidMount = () => {
    // control the life cycle of the react component> to send info from the back to the front.
    axios
      .get("http://localhost:5005/api/reservation")
      .then((response) => {
        // const reservations = _.cloneDeep();
        this.setState({
          reservationList: response.data.reservationList,
        });
      })
      .catch((error) => {
        console.log("here is the error ",error);
      });
  };

  render = () => {
    if (this.state.reservationList.length === 0) {
      console.log('i am here')
      return (
        <>
        <div className="loading-container" style={{display: "flex"}}>
            < CircularProgress style={{margin: "auto"}}/>
        </div>
        
        <div></div>
        </>
      )
    }

    return (
      <>
        {this.state.reservationList.map(function (el) {
          return (
            <div className="reservations-container">
              <li key={el._id}>{el._id}</li>
              <li> user ID: {el.userId}</li>
              <li>from date: {el.fromDate}</li>
              <li>to date: {el.toDate}</li>
            </div>
          );
        })}
      </>
    );
  };
}

export default Reservation;
