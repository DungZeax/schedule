import React from 'react';
// import events from '../../events';
import {Calendar, momentLocalizer, Views} from 'react-big-calendar';
import withDragAndDrop from 'react-big-calendar/lib/addons/dragAndDrop';
import 'react-big-calendar/lib/addons/dragAndDrop/styles.scss';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import moment from "moment";
import {connect} from 'react-redux';

const DragAndDropCalendar = withDragAndDrop(Calendar);

const localizer = momentLocalizer(moment);

class DndCalendar extends React.Component {
    constructor(props) {
        super(props);

        this.moveEvent = this.moveEvent.bind(this);
        this.newEvent = this.newEvent.bind(this);
        this.resizeEvent = this.resizeEvent.bind(this);
    }

    componentDidMount() {
        this.props.getList();
    }

    moveEvent({event, start, end, isAllDay: droppedOnAllDaySlot}) {
        let allDay = event.allDay;

        if (!event.allDay && droppedOnAllDaySlot) {
            allDay = true
        } else if (event.allDay && !droppedOnAllDaySlot) {
            allDay = false
        }

        const updatedEvent = {...event, start, end, allDay};

        this.props.moveTask(updatedEvent);
    }

    resizeEvent = ({event, start, end}) => {

        const existingEvent = {...event, start, end};

        this.props.resizeTask(existingEvent);
    };

    newEvent(event) {
        const title = window.prompt('New Event name');
        if (title) {
            let hour = {
                // id: newId,
                title: title,
                allDay: event.slots.length === 1,
                start: event.start,
                end: event.end,
            };

            this.props.newTask(hour);
        }
    }

    onSelectEvent(event) {
        const r = window.confirm("Would you like to remove this event?");
        if(r === true){
            this.props.deleteTask(event);
        }
    }

    render() {
        return (
            <DragAndDropCalendar
                selectable
                localizer={localizer}
                events={this.props.bookingReducer.events}
                onEventDrop={this.moveEvent}
                resizable
                onEventResize={this.resizeEvent}
                onSelectSlot={this.newEvent}
                onDragStart={console.log}
                defaultView={Views.WEEK}
                date={new Date(this.props.datePickerReducer.date)}
                onNavigate={(date) => this.props.changeDate(date)}
                onSelectEvent = {event => this.onSelectEvent(event)}
            />
        )
    }
}

const mapStateToProps = (state) => {
    return {
        ...state
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        moveTask(param) {
            return dispatch({
                type: 'MOVE_EVENT',
                param: param,
            })
        },
        resizeTask(param) {
            return dispatch({
                type: 'RESIZE_EVENT',
                param: param,
            })
        },
        newTask(param) {
            return dispatch({
                type: 'NEW_EVENT',
                param: param
            })
        },
        deleteTask(param) {
            return dispatch({
                type: 'DELETE_EVENT',
                param: param
            })
        },
        getList() {
            return dispatch({
                type: 'GET_LIST',
            })
        },
        changeDate(date) {
            return dispatch({
                type: 'ON_CHANGE',
                data: date

            })
        }
    }
};
export default connect(mapStateToProps, mapDispatchToProps)(DndCalendar);