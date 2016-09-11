import React from 'react';

class EventDropdown extends React.Component {

  render() {

    return(
      <div className="event-dropdown">
        <h2 className="event-menu-text">this week <span className="glyphicon glyphicon-triangle-bottom" aria-hidden="true"></span></h2>
        <ul className="event-options">
          <li className="event-option-items">this month</li>
          <li className="event-option-items">this year</li>
        </ul>
      </div>
    );
  }
}

export default EventDropdown;
