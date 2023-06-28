import React, { Component } from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';

import EventDetails from './eventDetails';

import * as eventAction from '../store/eventAction';
import * as types from '../store/eventActionTypes';

import 'react-datetime/css/react-datetime.css';

moment.locale('en');
const localizer = momentLocalizer(moment);

class EventCalendar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      eventType: 'add',
      newIndex: 0,
      eventInfo: {}
    };
  }

  componentDidMount() {
    this.props.dispatch(eventAction.GetInitialEvents());
  }

  handleHide() {
    this.setState({ showModal: false });
  }

  handleShow(slotInfo, eventType) {
    const currentIndex = this.props.events.allEvents.length;
    this.setState({
      showModal: true,
      eventType: eventType,
      eventInfo: slotInfo,
      newIndex: currentIndex
    });
  }

  deleteEvent(id) {
    this.props.dispatch({
      type: types.REMOVE_EVENT,
      payload: id
    });
    this.setState({ showModal: false });
  }

  addEvent(obj) {
    this.props.dispatch({
      type: types.ADD_EVENT,
      payload: obj
    });
    this.setState({ showModal: false });
  }

  updateEvent(obj) {
    this.props.dispatch({
      type: types.UPDATE_EVENT,
      payload: {
        id: obj.id,
        obj: obj
      }
    });
    this.setState({ showModal: false });
  }

  eventStyle(event, start, end, isSelected) {
    const bgColor = event.hexColor ? event.hexColor : '#265985';
    const style = {
      backgroundColor: bgColor,
      borderRadius: '5px',
      opacity: 1,
      color: 'white',
      border: '0px',
      display: 'block'
    };
    return {
      style: style
    };
  }

  render() {
    return (
      <div className="bodyContainer">
        <div className="well well-sm">
          <h3 className="instruction">Instructions</h3>
          <strong>To add an event: </strong> Click on the day you want to add an event or drag up to the day you want to add the event for a multiple-day event! <br />
          <strong>To update and delete an event:</strong> Click on the event you wish to update or delete!
        </div>
        <div className="calendarContainer">
          <Calendar
            localizer={localizer}
            selectable
            events={this.props.events.allEvents}
            views={['month', 'week', 'day']}
            step={60}
            showMultiDayTimes
            defaultDate={new Date()}
            onSelectEvent={(event) => this.handleShow(event, 'edit')}
            onSelectSlot={(slotInfo) => this.handleShow(slotInfo, 'add')}
            style={{ height: '500px', width: '40vw' }} // Adjust the height and width here
            eventPropGetter={this.eventStyle}
          />
        </div>
        <EventDetails
          showModal={this.state.showModal}
          handleHide={() => this.handleHide()}
          eventType={this.state.eventType}
          eventInfo={this.state.eventInfo}
          newIndex={this.state.newIndex}
          deleteEvent={(id) => this.deleteEvent(id)}
          addEvent={(obj) => this.addEvent(obj)}
          updateEvent={(obj) => this.updateEvent(obj)}
        />
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { events } = state;
  return {
    events
  };
}

export default connect(mapStateToProps)(EventCalendar);
