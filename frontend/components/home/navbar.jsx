import React from 'react';

const Navbar = ({session, logout}) => {
  const {currentUser} = session;
  let greeting;

  if (currentUser) {
    greeting = (
      [
        <li key='1'>Hello, {currentUser.email}</li>,
        <button key='2' onClick={logout}>logout</button>
      ]
    );

  } else {
    greeting = (
      [
        <li key='1'><a href='#/login'>login</a></li>,
        <li key='2'><a href='#/signup'>signup</a></li>
      ]
    );
  }

  return (
    <nav>
      <a href="#">Pizza With Strangers</a>
      <ul>
        <li><a href="#">Cities</a></li>
        {greeting}
      </ul>
    </nav>
  );
};

export default Navbar;
