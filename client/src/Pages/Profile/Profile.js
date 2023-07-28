// Profile.js
import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import API from '../../services/api';
import './Profile.css';
import { Sidebar } from '../../components/Sidebar/Sidebar';


export const Profile = () => {
    const [show, setShow] = useState(false);
    const [name, setName] = useState("John Doe");

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleSubmit = event => {
        event.preventDefault();
        // Submit the form and update the profile name here
        setName(event.target.name.value);
        updateUser(name);

        handleClose();
    };

    const updateUser = async (name) => {
        // Retrieve user id from local storage
        const id = localStorage.getItem('userId');
      
        try {
          const response = await API.put(`/users/${id}`, {
            name, // Only update username
          });
      
          console.log(response.data);
        } catch (error) {
          console.error(error);
        }
    };
      

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
              <h3 className="full-name">{name}</h3>
              <div className="rating">5.0</div>
              <button className="btn btn-primary" onClick={handleShow}>
                Edit Profile
              </button>
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

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Profile</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Label>Full Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter full name"
                name="name"
                defaultValue={name}
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              Save Changes
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  </div>
  );
};
