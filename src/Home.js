
import React from 'react';
import './Styles/Home.css';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className='home'>
      <h1>Welcome to the Survey App</h1>
      <div className='content'>
        <div className='links'>
          <Link to="/login">Admin Login/Signup</Link>
        </div>
        <div className='links'>
          <Link to="/survey">Take a Survey</Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
