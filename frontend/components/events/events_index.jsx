import React from 'react';
import { withRouter } from 'react-router';

class EventsIndex extends React.Component {

  render() {
    const {events} = this.props;

    const eventList = Object.keys(events).map( id => (
      <div key={id} className="event-container">
        <p className="event-text">{events[id].name}</p>
        <p className="event-text">{events[id].address}</p>
        <p className="event-text">{events[id].date}</p>
        <p className="event-text">{events[id].time}</p>
        <p className="event-text">Available Seats: {events[id].seats}</p>
        <a className="btn btn-primary">Join the Party</a>
        </div>
    ));

    return(
      <div className="container">
        <div className="flex-container">
          <div className="events-container">
            {eventList}
          </div>
        </div>
      </div>
    );
  }
}

export default EventsIndex;
