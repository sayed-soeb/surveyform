
import React from 'react';
import './Styles/Home.css';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className='home'>
      <div>
      <h1>Take survey online</h1>
      <p>This is the online survey platform where you can 
        give survey according to your preferences.
      </p>
      <p>Our online survey helps us to understand you better.</p>
      </div>
      <div className='content'>
        <div className='links'>
          <Link to="/login">Login/Signup</Link>
        </div>
        <div className='links'>
          <Link to="/survey">Take a Survey</Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
