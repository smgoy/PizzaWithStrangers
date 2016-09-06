import React from 'react';
import { withRouter } from 'react-router';

class EventsIndex extends React.Component {

  joinEvent(e) {
    e.preventDefault();
    const eventId = $(e.currentTarget).data('id');
    const userId = this.props.currentUser.id;
    const attendance = { attendance: { event_id: eventId, user_id: userId } };
    this.props.createAttendance(attendance);
  }

  showEventForm() {

  }

  render() {
    const {events} = this.props;

    const eventList = Object.keys(events).map( id => (
      <div key={id} className="event-container">
        <p className="event-text">{events[id].name}</p>
        <p className="event-text">{events[id].address}</p>
        <p className="event-text">{events[id].date}</p>
        <p className="event-text">{events[id].time}</p>
        <p className="event-text">Available Seats: {events[id].seats}</p>
        <a data-id={id} onClick={this.joinEvent.bind(this)} className="btn btn-primary">Join the Party</a>
        </div>
    ));

    return(
      <div className="container">
        <a onClick={this.showEventForm.bind(this)} className="new-event">+ New Event</a>
        <div className="event-header-container">
          <h2 className="event-header-text">this week.</h2>
        </div>
        <div className="event-header-container">
          <h2 className="event-header-text">this month.</h2>
        </div>
        <div className="event-header-container">
          <h2 className="event-header-text">this year.</h2>
        </div>
      </div>
    );
  }
}

export default withRouter(EventsIndex);
