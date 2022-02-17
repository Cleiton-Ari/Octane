import axios from "axios";
import React from "react";
import array from "lodash/array";

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
    console.log(this.state.reservationList[0]?._id);

    if (this.state.reservationList.length <= 0) return "loading...";

    return (
      <>
        {this.state.reservationList.map(function (el) {
          return <li></li>;
        })}
      </>
    );
  };
}

export default Reservation;
