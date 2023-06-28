import React, { Component } from 'react';
import { Modal, Button } from 'react-bootstrap';
import moment from 'moment';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

export default class EventDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      eventDetail: {
        id: '',
        title: '',
        start: new Date(),
        end: new Date(),
        allDay: false,
        hexColor: '#265985',
        notes: '',
      },
    };
    this.changeHandler = this.changeHandler.bind(this);
  }

  componentDidMount() {
    this.setState((prevState) => ({
      eventDetail: {
        ...prevState.eventDetail,
        id: this.props.eventType === 'add' ? this.props.newIndex : this.props.eventInfo.id,
        title: this.props.eventInfo && this.props.eventInfo.title ? this.props.eventInfo.title : '',
        start: this.props.eventInfo && this.props.eventInfo.start ? new Date(this.props.eventInfo.start) : new Date(),
        end: this.props.eventInfo && this.props.eventInfo.end ? new Date(this.props.eventInfo.end) : new Date(),
        allDay: this.props.eventInfo && this.props.eventInfo.allDay ? true : false,
        hexColor: this.props.eventInfo && this.props.eventInfo.hexColor ? this.props.eventInfo.hexColor : '#265985',
        notes: this.props.eventInfo && this.props.eventInfo.notes ? this.props.eventInfo.notes : '',
      },
    }));
  }

  changeHandler(e, ref) {
    const { eventDetail } = this.state;
    let val = '';
    if (ref !== 'allDay') {
      if (ref === 'start' || ref === 'end') {
        val = e;
      } else {
        val = e.target.value;
      }
    } else {
      val = e.target.checked;
    }

    this.setState((prevState) => ({
      eventDetail: {
        ...prevState.eventDetail,
        [ref]: val,
      },
    }));
  }

  handleSubmit() {
    const { eventDetail } = this.state;
    if (eventDetail.title.trim() === '') {
      alert('Please enter the event title.');
      return;
    }

    if (eventDetail.start > eventDetail.end) {
      alert('End date/time should be after start date/time.');
      return;
    }

    if (this.props.eventType === 'add') {
      this.props.addEvent(eventDetail);
    } else {
      this.props.updateEvent(eventDetail);
    }
    this.props.handleHide();
  }

  handleDelete() {
    const { eventDetail } = this.state;
    this.props.deleteEvent(eventDetail.id);
    this.props.handleHide();
  }

  render() {
    const { eventDetail } = this.state;

    return (
      <Modal show={this.props.showModal} onHide={this.props.handleHide}>
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title">Event Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <label>Event Name</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter the Event Name"
            value={eventDetail.title}
            onChange={(e) => this.changeHandler(e, 'title')}
          />

          <label>Start Date/Time</label>
          <DatePicker
            selected={eventDetail.start}
            onChange={(date) => this.changeHandler(date, 'start')}
            showTimeSelect
            timeFormat="HH:mm"
            timeIntervals={15}
            dateFormat="MMMM d, yyyy h:mm aa"
            className="form-control"
          />

          <label>End Date/Time</label>
          <DatePicker
            selected={eventDetail.end}
            onChange={(date) => this.changeHandler(date, 'end')}
            showTimeSelect
            timeFormat="HH:mm"
            timeIntervals={15}
            dateFormat="MMMM d, yyyy h:mm aa"
            className="form-control"
          />

          <label>Event Notes</label>
          <textarea
            className="form-control"
            placeholder="Event Notes"
            value={eventDetail.notes}
            onChange={(e) => this.changeHandler(e, 'notes')}
          />

          <label>Event Color</label>
          <input
            type="color"
            value={eventDetail.hexColor}
            onChange={(e) => this.changeHandler(e, 'hexColor')}
            style={{ marginRight: '20px', marginLeft: '5px' }}
          />

          <div>
            <input
              type="checkbox"
              name="all_Day"
              checked={eventDetail.allDay}
              onChange={(e) => this.changeHandler(e, 'allDay')}
            />
            <label>All Day</label>
          </div>
        </Modal.Body>
        <Modal.Footer>
          {this.props.eventType === 'add' ? (
            <Button bsstyle="success" onClick={() => this.handleSubmit()}>
              Add
            </Button>
          ) : (
            <>
              <Button bsstyle="warning" onClick={() => this.handleSubmit()}>
                Update
              </Button>
              <Button bsstyle="danger" onClick={() => this.handleDelete()}>
                Delete
              </Button>
            </>
          )}
          <Button onClick={this.props.handleHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }
}
