// Profile.js
import React, { useState, useEffect } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import API from '../../services/api';
import './Profile.css';
import { Sidebar } from '../../components/Sidebar/Sidebar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'


export const Profile = () => {
    const [cars, setCars] = useState([]);
    const [show, setShow] = useState(false);
    const [name, setName] = useState(JSON.parse(localStorage.getItem("user")).name);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const userId = localStorage.getItem('userId');

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await API.get(`/cars/userCars/${userId}`);
                setCars(response.data);
            } catch (error) {
                console.error("Error fetching user's cars", error);
            }
        };

        fetchData();
    }, [userId]);

    const Info = (props) => {
        // Format the dates for display
        const formattedAvailableDate = new Date(props.avail).toLocaleDateString();
        const formattedDropDate = new Date(props.drop).toLocaleDateString();
      
        return (
          <div className='card'>
            <img src={props.url} alt={props.name} className="card-image" />
            <div className="card-content">
              <p id="name">{props.name}</p>
              <p><strong>car condition:</strong> {props.desc}</p>
              <p><strong>City:</strong> {props.city}</p>
              <p><strong>Available Date:</strong> {formattedAvailableDate}</p>
              <p><strong>Drop Date and Time:</strong> {formattedDropDate}</p>
            </div>
            <button>Rent Now</button>
          </div>
        );
      };
      

    const handleSubmit = async (event) => {
        event.preventDefault();
        // Submit the form and update the profile name here
        await setName(event.target.name.value);

        await updateUser(event.target.name.value);
        handleClose();
    };

    const updateUser = async (name) => {
        // Retrieve user id from local storage
        const id = localStorage.getItem('userId');

        console.log({name}, "here")
      
        try {
          const response = await API.put(`/users/${id}`, {
            name, // Only update username
          });
      
          localStorage.setItem("user", JSON.stringify(response.data));
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
                <div className="rating">
                    <FontAwesomeIcon icon={faStar} />
                    {' '}
                    5.0
                </div>
                <button className="btn btn-primary" onClick={handleShow}>
                    Edit Profile
                </button>
            </div>
          </div>
          <hr className="divider" />
            <div className="row row-cols-1 row-cols-md-3 g-4 cars-result">
                {cars.map((car) => (
                <Info
                    key={car._id}
                    url={car.carImageLink}
                    name={car.carName}
                    desc={car.desc}
                    avail={car.available}
                    drop={car.DropDate}
                    city={car.city}
                />
                ))}
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
