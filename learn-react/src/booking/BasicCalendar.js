import React, {Component} from 'react';
import {Calendar, momentLocalizer, Views} from 'react-big-calendar'
import moment from 'moment';
import 'moment/locale/vi';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import withDragAndDrop from 'react-big-calendar/lib/addons/dragAndDrop'
import events from "../events";

const localizer = momentLocalizer(moment);
const DragAndDropCalendar = withDragAndDrop(Calendar);
export default class Schedule extends Component {
    constructor(props) {
        super(props);

        this.moveEvent = this.moveEvent.bind(this);
    }

    state = {
        events: events,
        culture: 'vi'
    };

    handleSelect = ({start, end}) => {
        const title = window.prompt('New Event name');
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
    };

    moveEvent({event, start, end, isAllDay: droppedOnAllDaySlot}) {
        const {events} = this.state;

        const idx = events.indexOf(event)
        let allDay = event.allDay;

        if (!event.allDay && droppedOnAllDaySlot) {
            allDay = true
        } else if (event.allDay && !droppedOnAllDaySlot) {
            allDay = false
        }

        const updatedEvent = {...event, start, end, allDay};

        const nextEvents = [...events];
        nextEvents.splice(idx, 1, updatedEvent);

        this.setState({
            events: nextEvents,
        })

        // alert(`${event.title} was dropped onto ${updatedEvent.start}`)
    }

    resizeEvent = ({event, start, end}) => {
        const {events} = this.state;

        const nextEvents = events.map(existingEvent => {
            return existingEvent.id === event.id
                ? {...existingEvent, start, end}
                : existingEvent
        });

        this.setState({
            events: nextEvents,
        })

        //alert(`${event.title} was resized to ${start}-${end}`)
    }

    render() {
        return (
            <div className='container' style={{height: '100vh'}}>
                <DragAndDropCalendar
                    selectable
                    localizer={localizer}
                    events={this.state.events}
                    onEventDrop={this.moveEvent}
                    resizable
                    onEventResize={this.resizeEvent}
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
