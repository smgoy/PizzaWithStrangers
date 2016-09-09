import React from 'react';

const Home = ({currentUser, cities}) => {
  let button;
  if (currentUser) {
    button = <a className="join-button" href={`#/city/${currentUser.city_id}`} role="button">JOIN THE PARTY!</a>;
  } else {
    button = <a className="join-button" href='#/signup' role="button">JOIN THE PARTY!</a>;
  }

  return(
    <div>
      <div className="home-container">
        <div className="home-text-container">
          <img className="home-image" src="assets/pizza.png" />
          <h1 className="home-text">We all feel a little more ourselves at a pizza party.</h1>
          <div className="join-container">
            {button}
          </div>
        </div>
      </div>
      <div className='footer'>
        <h3 className='footer-text'>MAKE FRIENDS - EAT PIZZA - KEEP IT CHEESY</h3>
      </div>
    </div>
  );
};

export default Home;
