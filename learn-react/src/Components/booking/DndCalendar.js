import React from 'react';
import events from '../../events';
import {Calendar, momentLocalizer, Views} from 'react-big-calendar';
import withDragAndDrop from 'react-big-calendar/lib/addons/dragAndDrop';
import 'react-big-calendar/lib/addons/dragAndDrop/styles.scss';
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

    moveEvent({ event, start, end, isAllDay: droppedOnAllDaySlot }) {
        const { events } = this.props;

        const idx = events.indexOf(event);
        let allDay = event.allDay;

        if (!event.allDay && droppedOnAllDaySlot) {
            allDay = true
        } else if (event.allDay && !droppedOnAllDaySlot) {
            allDay = false
        }

        const updatedEvent = { ...event, start, end, allDay };

        const nextEvents = [...events];
        nextEvents.splice(idx, 1, updatedEvent);

        this.props.moveTask(nextEvents);
        // alert(`${event.title} was dropped onto ${updatedEvent.start}`)
    }

    resizeEvent = ({ event, start, end }) => {
        const { events } = this.props;

        const nextEvents = events.map(existingEvent => {
            return existingEvent.id === event.id
                ? { ...existingEvent, start, end }
                : existingEvent
        });

        this.props.resizeTask(nextEvents);

        //alert(`${event.title} was resized to ${start}-${end}`)
    };

    newEvent(event) {
        const title = window.prompt('New Event name');
        if (title) {
            let idList = this.props.events.map(a => a.id);
            let newId = Math.max(...idList) + 1;
            let hour = {
                id: newId,
                title: title,
                allDay: event.slots.length === 1,
                start: event.start,
                end: event.end,
            };
            this.props.newTask(this.props.events.concat([hour]));
        }
    }

    render() {
        return (
            <DragAndDropCalendar
                selectable
                localizer={localizer}
                events={this.props.events}
                onEventDrop={this.moveEvent}
                resizable
                onEventResize={this.resizeEvent}
                onSelectSlot={this.newEvent}
                onDragStart={console.log}
                defaultView={Views.WEEK}
            />
        )
    }
}

const mapStateToProps = ({bookingReducer}) => {
    return {
        ...bookingReducer
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        moveTask(data) {
            return dispatch({
                type: 'MOVE_EVENT',
                detail: data,
            })
        },
        resizeTask(data) {
            return dispatch({
                type: 'RESIZE_EVENT',
                detail: data,
            })
        },
        newTask(data) {
            return dispatch({
                type: 'NEW_EVENT',
                detail: data
            })
        }
    }
};
export default connect(mapStateToProps, mapDispatchToProps)(DndCalendar);