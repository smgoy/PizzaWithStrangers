import React from 'react';
import { withRouter } from 'react-router';

class EventsIndex extends React.Component {

  render() {
    const {events} = this.props;

    const eventList = Object.keys(events).map( id => (
      <div key={id} className='event-container'>
        <p className='event-text'>{events[id].host_id}</p>
      </div>
    ));

    return(
      <div className="container">
        <div className="events-container">
          {eventList}
        </div>
      </div>
    );
  }
}

export default EventsIndex;
