import React from 'react';

class Dashboard extends React.Component {

  quickSort(events) {
    if (events.length === 0) return events;
    if (events.length === 1) return events;

    let el = events[0];
    let left = events.slice(1).filter( event => Date.parse(event.date) <= Date.parse(el.date) );
    let right = events.slice(1).filter( event => Date.parse(event.date) > Date.parse(el.date) );

    return this.quickSort(left).concat([el]).concat(this.quickSort(right));
  }

  render() {
    

    attendedEvents = this.quickSort(attendedEvents);

    return (
      <div className="events-container">
        <div className="display-events">
          {this.displayEvents(attendedEvents)}
        </div>
      </div>
    );
  }
}

export default Dashboard;
