import React from 'react';

const CitiesIndex = ({cities}) => {

  const cityList = Object.keys(cities).map( id => (
    <li key={cities[id].name}>{cities[id].name}</li>
  ));

  return(
    <ul>
      {cityList}
    </ul>
  );
};

export default CitiesIndex;
