// import React from 'react';
// import Calendar from "react-calendar";
// // import {Calendar as BigCalendar} from 'react-big-calendar';
// // import moment from 'moment';
// import Header from '../Components/Header';
// import './booking.css';
// import Basic from "./BasicCalendar";
//
// class Booking extends React.Component {
//     render() {
//         // const localizer = BigCalendar.momentLocalizer(moment);
//         // const MyCalendar = props => (
//         //     <div>
//         //         <BigCalendar
//         //             localizer={localizer}
//         //             // events={myEventsList}
//         //             startAccessor="start"
//         //             endAccessor="end"
//         //         />
//         //     </div>
//         // );
//         return (
//             <div className="col-md-12" id="table">
//                 <div className="row">
//                     <Header/>
//                 </div>
//                 <br/><br/><br/>
//                 <div className="row">
//                     <div className="col-md-2">
//                         <Calendar/>
//                         <Basic/>
//                     </div>
//                 </div>
//             </div>
//         )
//     }
// }
//
// export default Booking

import React, { Component } from 'react';
import { Calendar, momentLocalizer, Views } from 'react-big-calendar'
import moment from 'moment';
import 'moment/locale/vi';
import 'react-big-calendar/lib/css/react-big-calendar.css';

const localizer = momentLocalizer(moment);

export default class Schedule extends Component {
    state = {
        events: [],
        culture: 'vi'
    }

    handleSelect = ({ start, end }) => {
        const title = window.prompt('New Event name')
        if (title)
            this.setState({
                events: [
                    ...this.state.events,
                    {
                        start,
                        end,
                        title,
                    },
                ],
            })
    }
    render() {
        return (
            <div className='container' style={{height: '100vh'}}>
                <Calendar
                    selectable
                    localizer={localizer}
                    events={this.state.events}
                    culture={this.state.culture}
                    defaultView={Views.WEEK}
                    scrollToTime={new Date(1970, 1, 1, 6)}
                    onSelectEvent={event => alert(event.title)}
                    onSelectSlot={this.handleSelect}
                />
            </div>

        )
    }
}