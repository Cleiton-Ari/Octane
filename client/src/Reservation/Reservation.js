import axios from "axios";
import React from "react";
import {CircularProgress} from "react-cssfx-loading";
import OctaneCalendar from  "../Calendar/OctaneCalendar";


//component to make reservations
class Reservation extends React.Component {
  state = {
    Firstname: "",
    email: "",
    reservationList: [],
  };

  componentDidMount = () => {
    // control the life cycle of the react component> to send info from the back to the front.
    //TODO: for better performance; API should return a range of reservations. ex. for upcoming two months
    axios
      .get("http://localhost:5005/api/reservation")
      .then((response) => {
        // const reservations = _.cloneDeep();
        this.setState({
          reservationList: response.data.reservationList,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render = () => {
    if (this.state.reservationList.length <= 0) {
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
        <OctaneCalendar reservationsFromServer={this.state.reservationList} />
      </>
    );
  };
}

export default Reservation;

