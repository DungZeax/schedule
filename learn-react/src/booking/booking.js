import React from 'react';
import { Calendar as Calendar1} from 'react-calendar';
import { Calendar as Calendar2, momentLocalizer, Views } from 'react-big-calendar'
import Header from '../Components/Header';
import './booking.css';

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
                        <Calendar1 />
                        
                    </div>
                </div>
            </div>
        )
    }
}

export default Booking