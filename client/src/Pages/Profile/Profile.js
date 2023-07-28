// Profile.js
import React from 'react';
import './Profile.css';
import { Sidebar } from '../../components/Sidebar/Sidebar';

export const Profile = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <Sidebar />
        <div className="col-10">
          <div className="profile">
            <div className="profile-header">
              <div className="profile-pic-section">
                <img
                  className="profile-pic"
                  src="https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                  alt="Profile Pic"
                />
              </div>
              <div className="profile-details">
                <h3 className="full-name">John Doe</h3>
                <div className="rating">5.0</div>
                <button className="edit-profile-btn">Edit Profile</button>
              </div>
            </div>
            <hr className="divider" />
            <div className="posted-pictures-section">
              <h4>Posted Pictures</h4>
              <div className="posted-pictures">
                {/* Map through the posted pictures and display them here */}
                {/* Example: */}
                {/* <img src="path_to_posted_picture_1" alt="Posted Pic 1" /> */}
                {/* <img src="path_to_posted_picture_2" alt="Posted Pic 2" /> */}
                {/* ... */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
