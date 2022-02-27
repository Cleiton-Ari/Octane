import axios from "axios";
import React from "react";
import {CircularProgress} from "react-cssfx-loading";
import OctaneCalendar from  "../Calendar/OctaneCalendar";
import {Redirect} from "react-router-dom";


//component to make reservations
class Reservation extends React.Component {
  state = {
    userId: "",
    email: "",
    reservationList: [],
    jetskiId: "",
    reservationDate: "",
    reservationId: "",
  };

  componentDidMount = (props) => {
    // control the life cycle of the react component> to send info from the back to the front.
    //TODO: for better performance; API should return a range of reservations. ex. for upcoming two months
    const jetskiId = this.props.jetskiId
    this.setState({
      jetskiId: jetskiId,
      userId: this.props.userId,
      email: this.props.email,
      redirect: null
    })
    
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


  handleReservationDate = (chosenDate) => {
//passing the post request in the second parameter of this.setState because it depends on the state changes 
//in reservationDate object, setState is an async function, passsing the post request will create the dependency
//and will only execute after the setState changes the reservationDate
    this.setState({
        reservationDate: chosenDate
      }, () => {
        const reservation = {
          userId: this.state.userId,
          jetskiId: this.state.jetskiId,
          fromDate: this.state.reservationDate,
          toDate: this.state.reservationDate
        }
        
        axios.post("http://localhost:5005/api/reservation", reservation)
          .then((response) => {
            this.setState({redirect: `/reservation-details/${response.data.createdReservationFromDb._id}`})
          })
          .catch(error => console.log(error))
      })
 
  } 

  render = () => {
    if (this.state.redirect) return <Redirect to={this.state.redirect}/>
    
    if (this.state.reservationList.length <= 0) {
      return (
        <div className="container-payement">

          <div className="payement">
          <h6>Finalisez votre choix:</h6>
          <p>Carte bancaire: choix</p>
          <p>Date d'expiration:</p>
          <p>Crypto:</p>
          </div>

          <div className="loading-container" style={{display: "flex"}}>
              <CircularProgress style={{alignItems: "center", margin: "auto"}}/>
          </div>
        </div>
      )
    }
    return (
      <>
        <OctaneCalendar reservationsFromServer={this.state.reservationList} reserveDate={this.handleReservationDate}/>
      </>
    );
  };
}

export default Reservation;

/*

                        (App)
                        /   \
                      /    (reservation) state ={jetskiID, userId, date} => post vers reservation 
              (login) (singup) 
                  {userId, email}        



*/

