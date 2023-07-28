import React, { useContext, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faHome, faPen, faUser, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';

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
    <div className="col-2 bg-dark sidebar" style={{ height: '100vh' }}>
      <div className="sidebar-header">
        <FontAwesomeIcon icon={faBars} className="menu-icon" />
        <h1 className="sidebar-title">CarPool</h1>
      </div>
      <ul className="nav flex-column">
        <li className="nav-item">
          <a className="nav-link text-light" href="/">
            <FontAwesomeIcon icon={faHome} />{' '}
            <span className="menu-text">Home</span>
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-light" href="/rental-form">
            <FontAwesomeIcon icon={faPen} />{' '}
            <span className="menu-text">Post</span>
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-light" href="/profile">
            <FontAwesomeIcon icon={faUser} />{' '}
            <span className="menu-text">Profile</span>
          </a>
        </li>
      </ul>
      <div className="sidebar-footer">
        <button type="logout" className="btn btn-primary" onClick={logout}>
          <FontAwesomeIcon icon={faSignOutAlt} />{' '}
          <span className="menu-text">Logout</span>
        </button>
      </div>
    </div>
  );
};
