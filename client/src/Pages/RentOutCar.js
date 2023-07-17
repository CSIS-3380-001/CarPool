import React from 'react';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import './rent.css';


const information = [
  {
    url: '/SUV.PNG',
    name: 'React',
    desc: 'Experienced in React projects with expertise modern web development practices. Skilled in creating robust and efficient applications with a focus on user experience and leveraging the power of React'
  },
  {
    url: '/sedan.PNG',
    name: 'React',
    desc: 'Experienced in React projects with expertise modern web development practices. Skilled in creating robust and efficient applications with a focus on user experience and leveraging the power of React'
  },
  {
    url: '/hbag.PNG',
    name: 'React',
    desc: 'Experienced in React projects with expertise modern web development practices. Skilled in creating robust and efficient applications with a focus on user experience and leveraging the power of React'
  },
  {
    url: '/hbag.PNG',
    name: 'React',
    desc: 'Experienced in React projects with expertise modern web development practices. Skilled in creating robust and efficient applications with a focus on user experience and leveraging the power of React'
  },
  {
    url: '/sedan.PNG',
    name: 'React',
    desc: 'Experienced in React projects with expertise modern web development practices. Skilled in creating robust and efficient applications with a focus on user experience and leveraging the power of React'
  },
  {
    url: '/hbag.PNG',
    name: 'React',
    desc: 'Experienced in React projects with expertise modern web development practices. Skilled in creating robust and efficient applications with a focus on user experience and leveraging the power of React'
  },
  {
    url: '/hbag.PNG',
    name: 'React',
    desc: 'Experienced in React projects with expertise modern web development practices. Skilled in creating robust and efficient applications with a focus on user experience and leveraging the power of React'
  },
  {
    url: '/sedan.PNG',
    name: 'React',
    desc: 'Experienced in React projects with expertise modern web development practices. Skilled in creating robust and efficient applications with a focus on user experience and leveraging the power of React'
  },
  {
    url: '/hbag.PNG',
    name: 'React',
    desc: 'Experienced in React projects with expertise modern web development practices. Skilled in creating robust and efficient applications with a focus on user experience and leveraging the power of React'
  },
  {
    url: '/sedan.PNG',
    name: 'React',
    desc: 'Experienced in React projects with expertise modern web development practices. Skilled in creating robust and efficient applications with a focus on user experience and leveraging the power of React'
  },
  {
    url: '/hbag.PNG',
    name: 'React',
    desc: 'Experienced in React projects with expertise modern web development practices. Skilled in creating robust and efficient applications with a focus on user experience and leveraging the power of React'
  },
  {
    url: '/SUV.PNG',
    name: 'React',
    desc: 'Experienced in React projects with expertise modern web development practices. Skilled in creating robust and efficient applications with a focus on user experience and leveraging the power of React'
  }

]

const Info = (props) => (
  <div className='card'>
    <img src={props.url} alt={props.name} className="card-image" />
    <div className="card-content">
      <p id="name">{props.name}</p>
      <p>{props.desc}</p>
    </div>
    <button>Rent Now</button>
  </div>
);

export const RentOutCar = () => {
  return (
    <div className="Search" >
      <br /><br />
      <div className="search-bar">
        <input type="text" placeholder="Search" />
        <input type="date" placeholder="Pick-up Date" />
        <input type="date" placeholder="Drop-off Date" />
        <button>Find</button>
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
        {information.map((x, index) => (
          <Info key={index} url={x.url} name={x.name} desc={x.desc} />
        ))}
      </div>

    </div>
  );
};


