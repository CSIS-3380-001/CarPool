import React, { useState, useEffect } from 'react';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { Sidebar } from '../components/Sidebar/Sidebar';

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

    fetchCars();
  }, [selectedCity, availableDate, dropDate]);


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
    // <div className="container-fluid">
    //   <div className="row">
    //     <Sidebar></Sidebar>

    //     <div className="col-10">
    //     <div className="Search" >
    //         <div className="container mt-4">
    //             <div className="mb-3">
    //                 <label className="form-label" htmlFor="citySelect">Select City</label>
    //                 <select className="form-select form-select-lg mb-3" id="citySelect" onChange={handleCityChange}>
    //                     <option value="">Select City</option>
    //                     <option value="vancouver">Vancouver</option>
    //                     <option value="surrey">Surrey</option>
    //                     <option value="New West">New West</option>
    //                     <option value="Abbotsford">Abbotsford</option>
    //                 </select>
    //             </div>
    //             <div className="row">
    //                 <div className="col-md-6 mb-3">
    //                     <label className="form-label" htmlFor="available">Available Date</label>
    //                     <input
    //                         type="date"
    //                         className="form-control"
    //                         onChange={handleAvailableDateChange}
    //                         value={availableDate}
    //                         id="available"
    //                     />
    //                 </div>

    //                 <div className="col-md-6 mb-3">
    //                     <label className="form-label" htmlFor="drop">Drop Date</label>
    //                     <input
    //                         type="date"
    //                         className="form-control"
    //                         onChange={handleDropDateChange}
    //                         value={dropDate}
    //                         id="drop"
    //                     />
    //                 </div>
    //             </div>
    //         </div>
    //         <br /><br />
    //         {/* <div className="search-bar">
    //             <select style={{ width: '50%', fontSize: '20px' }} onChange={handleCityChange}>
    //             <option value="">Select City</option>
    //             <option value="vancouver">Vancouver</option>
    //             <option value="surrey">surrey</option>
    //             <option value="New West">New West</option>
    //             <option value="Abbotsford">Abbotsford</option>
    //             </select>
    //             <div className="date-input">
    //             <input
    //             type="date"
    //             onChange={handleAvailableDateChange}
    //             value={availableDate}
    //             id="available"
    //             />
    //         </div>
            
    //         <div className="date-input">
    //             <input
    //             type="date"
    //             onChange={handleDropDateChange}
    //             value={dropDate}
    //             id="drop"
    //             />
    //         </div> */}
    //         {/* </div> */}

    //         <br /><br />

    //         <div className="carousel-container">
    //             <Carousel>
    //             <Carousel.Item>
    //                 <img className="d-block w-50" src="/SUV.PNG" alt="SUV" />
    //             </Carousel.Item>
    //             <Carousel.Item>
    //                 <img className="d-block w-50" src="/sedan.PNG" alt="Sedan" />
    //             </Carousel.Item>
    //             <Carousel.Item>
    //                 <img className="d-block w-50" src="/offroad.PNG" alt="Offroad" />
    //             </Carousel.Item>
    //             <Carousel.Item>
    //                 <img className="d-block w-50" src="/hbag.PNG" alt="Hbag" />
    //             </Carousel.Item>
    //             </Carousel>
    //         </div>
    //         <br>

            // </br>
            // <br></br>
            

    //         </div>
    //     </div>
    //   </div>
    // </div>

    <div className="container-fluid">
    <div className="row">
        <Sidebar />

        <div className="col-10">
        <div className="p-3 border-bottom mb-4">
            <h3>Find your car</h3>
        </div>
        <div className="container mt-4">
            <div className="row">
            <div className="col-md-6 mb-3">
                <label className="form-label" htmlFor="citySelect">Select City</label>
                <select className="form-select mb-3" id="citySelect" onChange={handleCityChange}>
                <option value="">Select City</option>
                <option value="vancouver">Vancouver</option>
                <option value="surrey">Surrey</option>
                <option value="New West">New West</option>
                <option value="Abbotsford">Abbotsford</option>
                </select>
            </div>
            <div className="col-md-3 mb-3">
                <label className="form-label" htmlFor="available">Available Date</label>
                <input
                type="date"
                className="form-control"
                onChange={handleAvailableDateChange}
                value={availableDate}
                id="available"
                />
            </div>
            <div className="col-md-3 mb-3">
                <label className="form-label" htmlFor="drop">Drop Date</label>
                <input
                type="date"
                className="form-control"
                onChange={handleDropDateChange}
                value={dropDate}
                id="drop"
                />
            </div>
            </div>
        </div>

        {/* <div className="mt-4 mb-4">
            <Carousel>
            <Carousel.Item>
                <img className="d-block w-100" src="/SUV.PNG" alt="SUV" />
            </Carousel.Item>
            <Carousel.Item>
                <img className="d-block w-100" src="/sedan.PNG" alt="Sedan" />
            </Carousel.Item>
            <Carousel.Item>
                <img className="d-block w-100" src="/offroad.PNG" alt="Offroad" />
            </Carousel.Item>
            <Carousel.Item>
                <img className="d-block w-100" src="/hbag.PNG" alt="Hbag" />
            </Carousel.Item>
            </Carousel>
        </div> */}

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
    </div>

  );
};


