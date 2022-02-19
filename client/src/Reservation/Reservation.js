import axios from "axios";
import React from "react";
import array from "lodash/array";
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
        {this.state.reservationList.map(function (el) {
          return <div key={el._id}>
              <li>{el.jetskiId}</li>
              <li>{el.fromDate}</li>
              <li>{el.toDate}</li>
          </div>;
        })}
      </>
    );
  };
}

export default Reservation;
