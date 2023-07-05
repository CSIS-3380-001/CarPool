import React, { useContext, useEffect } from 'react';
import { AuthContext } from '../../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';

import './Sidebar.css';

export const Sidebar = () => {
  const { isLoggedIn, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
      if (!isLoggedIn) {
        console.log("Not logged in");
        // Redirect the user to the login page
        navigate('/login');
      }
    }, [isLoggedIn, navigate]);
  
  return (
<div class="col-2 bg-dark sidebar" style={{ height: '100vh' }}>
  <h1>Navigate</h1>
  <ul class="nav flex-column">
    <li class="nav-item">
      <a class="nav-link text-light" href="/">
        Home
      </a>
    </li>
    <li class="nav-item">
      <a class="nav-link text-light" href="/rental-form">
        Post
      </a>
    </li>
  </ul>
  <div class="button-wrapper">
    <button type="logout" class="btn btn-primary" onClick={logout}>
      Logout
    </button>
  </div>
</div>

  );
};
