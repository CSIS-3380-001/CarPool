import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import API from '../../services/api';

import './Signup.css';

export const Signup = () => {
  const navigate = useNavigate();
  

  const [username, setUsername] = useState('gauravmehla');
  const [email, setEmail] = useState('gaurav@mehla.in');
  const [password, setPassword] = useState('ninja');

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Perform signup logic here
    API.post("/users", {username, email, password})
    .then(response => {
        if(response.status === 201) {
          // Reset form fields
          setUsername('');
          setEmail('');
          setPassword('');

          // navigate to login
          navigate("/login");
        }
    })
    .catch(err => {
      console.log(err);
    })

  };

  return (

    <div className='container signup-form'>
      <div className='row'>
        <div className='col-md-6'>
        <div className="login-form">
        <h2>Signup</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              className="form-control"
              id="username"
              placeholder="Enter username"
              value={username}
              onChange={handleUsernameChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="Enter email"
              value={email}
              onChange={handleEmailChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="Enter password"
              value={password}
              onChange={handlePasswordChange}
            />
          </div>
          <div className="form-group">
            <button type="submit" className="btn btn-primary">
              Signup
            </button>
          </div>
        </form>
      
      </div>
      </div>
      <div className='col-md-6 sideImg'>
        <img src="https://i.imgur.com/Dc9mJwI.jpg" aria-hidden alt="Image"/>
      </div>
    </div>
  </div>
  );
};
