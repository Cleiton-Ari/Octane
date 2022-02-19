import React from 'react';
import Calendar from "react-calendar";
import {format, parse} from 'fecha';
import 'react-calendar/dist/Calendar.css';
import './OctaneCalendar.css';


//component to display reservations on the calendar.
class OctaneCalendar extends React.Component {
    state = {
        // reservationList: [],
        reservationList : {
            0: [1, 2, 3, 4, 5, 6, 7],
            1: [2, 4, 4, 4, 6 ,7 ,8 , 9, 10],
            2: [3, 4, 5, 6]
        
        },
        chosenDate: "",
        testDate: "2022-02-20 15:00:00.000"
    }

    onChangeDate = (value, event) => {
        event.preventDefault();
        const formattedDate = format(value, 'YYYY-MM-DDThh:mm:ss.SSS'); 
        this.setState({
            chosenDate: value
        }) 
    }

    disableDate = ({date, view}) => {
        if (view === 'month') {
            if (this.state.reservationList[date.getMonth()] && this.state.reservationList[date.getMonth()].find(el => el === date.getDate())) return true;
        }
        return false;
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
        </>
        )
    }
}


export default OctaneCalendar;


