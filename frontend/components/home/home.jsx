import React from 'react';

const Home = () => (
  <div>
    <div className="home-container">
      <div className="home-text-container">
        <img className="home-image" src="assets/pizza.png" />
        <h1 className="home-text">We all feel a little more ourselves at a pizza party.</h1>
        <div className="join-container">
          <a className="join-button" href='#/signup' role="button">JOIN THE PARTY!</a>
        </div>
      </div>
    </div>
    <div className='footer'>
      <h3 className='footer-text'>EAT PIZZA - KEEP IT CHEESY - MAKE FRIENDS</h3>
    </div>
  </div>
);

export default Home;
