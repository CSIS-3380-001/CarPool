import React from 'react';

export const Sidebar = () => {
  return (
        <div className="col-2 bg-dark sidebar" style={{ height: '100vh' }}>
          <ul className="nav flex-column">
            <li className="nav-item">
              <a className="nav-link text-light" href="/">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-light" href="/rental-form">
                Post
              </a>
            </li>
          </ul>
        </div>
  );
};
