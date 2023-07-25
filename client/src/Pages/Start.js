import React from 'react';
import { NavLink } from 'react-router-dom';
import './Start.css';
import RentOutCar from './RentOutCar';
import Host from './Host';

const Start = () => (
  <div className="main-content">
    <div className="content-item">
      <NavLink to="/start/rent-out-car" className="large" activeClassName="active-link">
        Rent Out Car 
      </NavLink>
      <br />
      <br />
      <img className="circular-image" src="book.PNG" alt="Book car" />
    </div>
    <div className="content-item_2">
      <img className="circular-image_1" src="host.PNG" alt="Host ac" />
      <NavLink to="/start/host" className="lg1" activeClassName="active-link">
         Host 🗝️ 
      </NavLink>
    </div>
  </div>
);

export { Start };
