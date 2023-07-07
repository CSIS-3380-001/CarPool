import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthContext';
import API from '../../services/api';
import Alert from 'react-bootstrap/Alert';

import './Login.css';

export const Login = () => {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const [email, setEmail] = useState('gaurav@mehla.in');
  const [password, setPassword] = useState('OnePiece');
  const [showAlert, setShowAlert] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showErrorAlert, setShowErrorAlert] = useState(false);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setIsSubmitting(true);

    API.post("/auth/login", {email, password})
    .then(response => {
      if(response.status === 200) {
        setShowAlert(true);

        setTimeout(() => {
          setIsSubmitting(false);
          setShowAlert(false);

          login();
          navigate("/");
        }, 3000);
        
      }
    })
    .catch(error => {
      console.error('Login failed:', error);
      setShowErrorAlert(true);

      setTimeout(() => {
        setIsSubmitting(false);
        setShowErrorAlert(false);
      }, 3000);
      
    });  
  };

  const goTo = (path) => {
    console.log("redirecting");
    navigate(path);
  }

  return (
    <div className='container'>
      <div className='row'>
        <div className='col-md-6'>
          <div className="login-form">
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
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
                <div className="input-group">
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    placeholder="Enter password"
                    value={password}
                    onChange={handlePasswordChange}
                  />
                </div>
              </div>

              <div className="form-group">
                <div className="row">
                  <div className="col">
                    <button type="submit" className="btn btn-primary btn-block login-button" disabled={isSubmitting}>
                      Login
                    </button>
                  </div>
                </div>
              </div>
            </form>

            <div className="row">
              <div className="col">
                  <button className="btn btn-primary btn-block signup-button" onClick={() => {goTo("/sign-up")}} disabled={isSubmitting}>
                    Signup
                  </button>
              </div>
            </div>

            <div className="form-group">
              {showAlert && (<Alert key={'success'} variant={'success'}>
                Login successful
              </Alert>)}

              {showErrorAlert && (
                <Alert variant="danger" onClose={() => setShowErrorAlert(false)} dismissible>
                  Error while login
                </Alert>
              )}
            </div>

          </div>
        </div>
        <div className='col-md-6 sideImg'>
          <img src="https://i.imgur.com/Dc9mJwI.jpg" aria-hidden alt="Image"/>
        </div>
      </div>
    </div>
  );
};
