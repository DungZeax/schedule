import React from 'react';
import Calendar from "react-calendar";
import Header from '../Header';
import './booking.css';
import DndCalendar from "./DndCalendar";
import {connect} from "react-redux"

class Booking extends React.Component {

    handleChange = (date) => {
        this.props.onChange(date);
    };

    render() {
        return (
            <div className="col-md-12" id="table">
                <div className="row">
                    <Header/>
                </div>
                <br/><br/><br/>
                <div className="row">
                    <div className="col-md-2">
                        <Calendar
                            onChange={this.handleChange}
                            value={this.props.date}
                        />
                    </div>
                    <div className="col-md-10">
                        <DndCalendar/>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = ({datePickerReducer}) => {
    return {
        ...datePickerReducer
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        onChange(data) {
            return dispatch({
                type: 'ON_CHANGE',
                data: data
            })
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Booking)