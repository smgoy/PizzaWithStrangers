import React from 'react';
import EventsContainer from '../events/events_container';
import EventRedirect from '../events/event_redirect';

const CityDetail = ({city, currentUser}) => {

  let image = '';
  if (city.image) {
    image = city.image.slice(0,48) + '/c_scale,q_50,w_2000' + city.image.slice(48);
  }

  let eventDisplay;
  if (currentUser) {
    eventDisplay = <EventsContainer />;
  } else {
    eventDisplay = <EventRedirect />;
  }

  return(
    <div>
      <div className="cover">
        <img className='city-cover' src={image} />
        <h2 className="cover-text-top">Get ready to</h2>
        <h2 className="cover-text-bottom">party {city.name}!</h2>
      </div>
      {eventDisplay}
    </div>
  );
};


export default CityDetail;
