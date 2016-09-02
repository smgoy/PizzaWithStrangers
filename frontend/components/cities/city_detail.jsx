import React from 'react';

const CityDetail = ({city}) => (
  <div className="cover">
    <img className='city-cover' src={city.image} />
    <h2 className="cover-text">{city.name}</h2>
  </div>
);


export default CityDetail;
