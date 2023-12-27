
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import './Styles/Signup.css';

const SignupForm = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = async () => {
    try {
      const response = await fetch('http://localhost:3001/api/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, email, password }),
      });

      if (response.ok) {
        console.log('Signup successful');
        toast.success('Signup successful');
      } else {
        console.error('Signup failed');
        toast.error('Signup failed');
      }
    } catch (error) {
      console.error(error);
      toast.error('An error occurred');
    }
  };

  return (
    <>
      <div className='signup'>
      <Link to="/" className="home-button">Home</Link>
        <div className='signup-form'>
          <h1>Admin Signup</h1>
          <div>
            <label>Username:
              <input type="text" className="signup-input" value={username} onChange={(e) => setUsername(e.target.value)} />
            </label>
          </div>
          <div>
            <label>Email:
              <input type="email" className="signup-input" value={email} onChange={(e) => setEmail(e.target.value)} />
            </label>
          </div>
          <div>
            <label>Password:
              <input type="password" className="signup-input" value={password} onChange={(e) => setPassword(e.target.value)} />
            </label>
          </div>
          <div>
            <button type="button" className="signup-button" onClick={handleSignup}>Signup</button>
          </div>
          <div>
            Already have an account? <Link to="/login" className="signup-link">Login</Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignupForm;
