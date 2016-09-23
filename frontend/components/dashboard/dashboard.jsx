import React from 'react';

class Dashboard extends React.Component {

  ditchEvent(e) {
    e.preventDefault();
    const eventId = $(e.currentTarget).data('id');
    const userId = this.props.currentUser.id;
    const attendance = { event_id: eventId, user_id: userId };
    this.props.destroyAttendance(attendance);
    this.props.addSeat(attendance.event_id);
    this.props.destroyUserEvent(attendance.event_id);
  }

  destroyEvent(e) {
    e.preventDefault();
    const eventId = $(e.currentTarget).data('id');
    this.props.destroyEvent(eventId);
    this.props.destroyHostEvent(eventId);
  }

  editEvent(e) {
    e.preventDefault();
    const event = $(e.currentTarget).data('event');
    this.props.receiveEvent(event);
    this.props.router.push('/edit-event');
  }

  quickSort(events) {
    if (events.length === 0) return events;
    if (events.length === 1) return events;

    let el = events[0];
    let left = events.slice(1).filter( event => Date.parse(event.date) <= Date.parse(el.date) );
    let right = events.slice(1).filter( event => Date.parse(event.date) > Date.parse(el.date) );

    return this.quickSort(left).concat([el]).concat(this.quickSort(right));
  }

  decorateEvent(eventList, text) {
    if (eventList.length === 0) {
      return (
        <div className="no-party">
          <p className="no-party-text">
            {text}
          </p>
        </div>
      );
    } else {
      return eventList.map( eventObj => {
        let button;
        if (this.props.currentUser.attendances.includes(eventObj.id)) {
          button = (
            <div className="event-join-container">
              <a data-id={eventObj.id} onClick={this.ditchEvent.bind(this)} className="join">Ditch</a>
            </div>
          );
        } else if (this.props.currentUser.hosted_events.includes(eventObj.id)) {
          button = (
            <div className="event-modify-container">
              <a data-event={JSON.stringify(eventObj)} onClick={this.editEvent.bind(this)} className="join">Edit</a>
              <a data-id={eventObj.id} onClick={this.destroyEvent.bind(this)} className="join">Delete</a>
            </div>
          )
        } else {
          if (eventObj.seats === 0) {
            button = (
              <div className="event-join-container">
                <a className="join-disabled">Missed Out</a>
              </div>
            );
          } else {
            button = (
              <div className="event-join-container">
                <a data-id={eventObj.id} onClick={this.joinEvent.bind(this)} className="join">Join</a>
              </div>
            );
          }
        }

        let titleShortner;
        if (eventObj.name.length >= 21) {
          titleShortner = eventObj.name.slice(0,19) + '...';
        } else {
          titleShortner = eventObj.name;
        }

        return(
          <div className="event-container" key={eventObj.id}>
            <h3 className="title">{titleShortner}</h3>
            <hr />
            <p className="event-info"><span className='seats'>{eventObj.seats}</span> Seat Left</p>
            <p className="event-info">{eventObj.address}</p>
            <p className="event-info">{eventObj.date}</p>
            <p className="event-info">at {eventObj.time}</p>
            {button}
          </div>
        );
      });
    }
  }

  objectToArray(obj) {
    return Object.keys(obj).map( id => obj[id]);
  }

  render() {
    const { userEvents } = this.props;
    let attendedEvents = userEvents.attendances;
    let hostedEvents = userEvents.hosted_events;
    let hostDisplay;

    if (this.props.currentUser.host) {
      attendedEvents = this.objectToArray(userEvents.attendances);
      attendedEvents = this.quickSort(attendedEvents);
      hostedEvents = this.objectToArray(userEvents.hosted_events);
      hostedEvents = this.quickSort(hostedEvents);
      hostDisplay = (
        <div>
          <div className="dashboard-text-display">
            <h2>Hosting:</h2>
          </div>
          <div className="events-container">
            <div className="display-events">
              {this.decorateEvent(hostedEvents, "C'mon, get to hosting!")}
            </div>
          </div>
        </div>
      );
    } else {
      attendedEvents = this.objectToArray(attendedEvents);
      attendedEvents = this.quickSort(attendedEvents);
    }


    return (
      <div>
        <div className="city-greeter">
          <h1 className="city-greeter-text">You're pretty popular, keep your events straight.</h1>
        </div>
        <div className="dashboard-text-display">
          <h2 className="dashboard-text">Attending:</h2>
        </div>
        <div className="events-container">
          <div className="display-events">
            {this.decorateEvent(attendedEvents, "C'mon, get to partying!")}
          </div>
        </div>

        {hostDisplay}
      </div>
    );
  }
}

export default Dashboard;
