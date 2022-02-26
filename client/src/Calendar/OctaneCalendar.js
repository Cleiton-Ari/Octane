import React from 'react';
import Calendar from "react-calendar";
import {format, parse} from 'fecha';
import 'react-calendar/dist/Calendar.css';
import './OctaneCalendar.css';



//component to display reservations on the calendar.
class OctaneCalendar extends React.Component {
    state = {
        reservationList : {},
        chosenDate: ""
    }

    componentDidMount = (props) => {
        const reservationRaw = this.props.reservationsFromServer
        let formattedReservations = {}
        reservationRaw.map(el => {
                const resMonth = new Date(el.fromDate).getMonth();
                const resDay = new Date(el.fromDate).getDate();
                if (formattedReservations[resMonth]) {
                    formattedReservations[resMonth].push(resDay);
                } else {
                    formattedReservations[resMonth] = [resDay];
                }
                
            })
        this.setState({
            reservationList: formattedReservations
        })
        return;
    }
    
    onChangeDate = (value, event) => {
        event.preventDefault();
        const formattedDate = format(value, 'YYYY-MM-DDThh:mm:ss.SSS'); 
        this.setState({
            chosenDate: formattedDate
        }) 
    }

    //disable tiles for alerady reserved dates
    disableDate = ({date, view}) => {
        if (view === 'month') {
            if (this.state.reservationList[date.getMonth()] && this.state.reservationList[date.getMonth()].find(el => el === date.getDate())) return true;
        }
        return false;
    }   

    handleReserveButton = (props) => {
        console.log(this.state.chosenDate)
        this.props.reserveDate(this.state.chosenDate)
    }


    render = () => {
        // const date = this.parseFromCalendar();
        
        return (
        <>
            <Calendar  
            onClickDay={this.onChangeDate} 
            // value="tomorrow"
            tileClassName={this.tileClassName} 
            tileDisabled={this.disableDate}/>
            <button onClick={this.handleReserveButton}>Reservez</button>
        </>
        )
    }
}


export default OctaneCalendar;


