import React, { useState, useEffect } from 'react';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import './rent.css';



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



export const RentOutCar = () => {

  const [selectedCity, setSelectedCity] = useState('');
  const [availableDate, setAvailableDate] = useState('');
  const [dropDate, setDropDate] = useState('');
  const [cars, setCars] = useState([]);

  useEffect(() => {
    fetchCars();
  }, [selectedCity, availableDate, dropDate]);

  const fetchCars = () => {
    let apiUrl = 'http://localhost:8081/cars/allCars';
    const params = [];

    if (selectedCity) {
      params.push(`city=${selectedCity}`);
    }
    if (availableDate && dropDate) {
      params.push(`available=${availableDate}`);
      params.push(`drop=${dropDate}`);
    }

    if (params.length > 0) {
      apiUrl += `?${params.join('&')}`;
    }

    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setCars(data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  };

  const handleCityChange = (event) => {
    setSelectedCity(event.target.value);
  };



  const handleAvailableDateChange = (event) => {
    const selectedDate = event.target.value;
    // Convert the selected date to ISO 8601 format (without time and timezone information)
    const isoDate = new Date(selectedDate).toISOString().split('T')[0];
    setAvailableDate(isoDate);
  };

  const handleDropDateChange = (event) => {
    const selectedDate = event.target.value;
    // Convert the selected date to ISO 8601 format (without time and timezone information)
    const isoDate = new Date(selectedDate).toISOString().split('T')[0];
    setDropDate(isoDate);
  };

  return (
    <div className="Search" >
      <br /><br />
      <div className="search-bar">
        <select style={{ width: '50%', fontSize: '20px' }} onChange={handleCityChange}>
          <option value="">Select City</option>
          <option value="vancouver">Vancouver</option>
          <option value="surrey">surrey</option>
          <option value="New West">New West</option>
          <option value="Abbotsford">Abbotsford</option>
        </select>
        <div className="date-input">
        <input
          type="date"
          onChange={handleAvailableDateChange}
          value={availableDate}
          id="available"
        />
      </div>
    
      <div className="date-input">
        <input
          type="date"
          onChange={handleDropDateChange}
          value={dropDate}
          id="drop"
        />
      </div>

        
      </div>

      <br /><br />

      <div className="carousel-container">
        <Carousel>
          <Carousel.Item>
            <img className="d-block w-50" src="/SUV.PNG" alt="SUV" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-50" src="/sedan.PNG" alt="Sedan" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-50" src="/offroad.PNG" alt="Offroad" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-50" src="/hbag.PNG" alt="Hbag" />
          </Carousel.Item>
        </Carousel>
      </div>
      <br>

      </br>
      <br></br>
      <div className="grid-container">
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
  );
};


