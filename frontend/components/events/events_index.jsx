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

  decorateEvent(eventObj) {
    return(
      <div>
        <div className="event-container">
          <div className="event-description">
            <p className="desc">Event Name:</p>
            <p className="desc">6 Seat Left</p>
          </div>
          <div className="event-details">
            <p className="details">9746 Florian Court</p>
            <p className="details">December, 26 at 08:57 AM</p>
            <a className="join">Join</a>
          </div>
        </div>
      </div>
    );
  }

  render() {
    const {events} = this.props;

    let thisWeek;
    let thisMonth;
    let thisYear;

    Object.keys(events).forEach( id => {
      //need to get date.js working
    });


    return(
      <div className="container">
        <a href="#/new-event" className="new-event">+ New Event</a>

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
