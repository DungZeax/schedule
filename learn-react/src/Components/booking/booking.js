import React from 'react';
import Calendar from "react-calendar";
import Header from '../Header';
import './booking.css';
// import Schedule from "./BasicCalendar";
import DndCalendar from "./DndCalendar";

class Booking extends React.Component {
    render() {
        return (
            <div className="col-md-12" id="table">
                <div className="row">
                    <Header/>
                </div>
                <br/><br/><br/>
                <div className="row">
                    <div className="col-md-2">
                        <Calendar/>
                    </div>
                    <div className="col-md-10">
                        <DndCalendar/>
                    </div>
                </div>
            </div>
        )
    }
}

export default Booking