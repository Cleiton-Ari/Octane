import Calendar from "react-calendar";


//component to display reservations on the calendar
class OctaneCalendar extends React.Component {
    state = {
        reservationList: []
    }


    render = () => {
        return 
        
            <>
                <Calendar />
            </>
    }
}


export default OctaneCalendar;