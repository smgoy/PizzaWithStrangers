import React from 'react';
import { Link, hashHistory } from 'react-router';

const Navbar = ({session, logout}) => {

  const {currentUser} = session;
  let greeting;

  if (currentUser) {
    greeting = (
      [
        <li key='1'><a>Hello, {currentUser.f_name}</a></li>,
        <li key='2' onClick={logout}><a href='#/'>Logout</a></li>
      ]
    );

  } else {
    greeting = (
      [
        <li key='1'><a href='#/login'>Login</a></li>,
        <li key='2'><a href='#/signup'>Signup</a></li>
      ]
    );
  }

  return (
    <nav className="navbar navbar-default navbar-static-top">
      <div className="container">
        <div className="navbar-header">
          <a href="#/"><img src="assets/logo.png" /></a>
        </div>
      <ul className="nav navbar-nav navbar-right">
        <li><a href="#/cities">Cities</a></li>
        {greeting}
      </ul>
      </div>
    </nav>
  );

};

export default Navbar;
