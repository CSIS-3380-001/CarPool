import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './RentalCabForm.css';

export const RentalCabForm = () => {
  const [vehicle, setVehicle] = useState({
    name: '',
    make: '',
    model: '',
  });

  const [availability, setAvailability] = useState({
    time: '',
    days: '',
  });

  const [locations, setLocations] = useState({
    pickup: null,
    dropOff: null,
  });

  const [costs, setCosts] = useState({
    fare: '',
    deposit: '',
    otherCosts: '',
  });

  const [images, setImages] = useState([]);

  const handleVehicleChange = (e) => {
    setVehicle({
      ...vehicle,
      [e.target.name]: e.target.value,
    });
  };

  const handleAvailabilityChange = (e) => {
    setAvailability({
      ...availability,
      [e.target.name]: e.target.value,
    });
  };

  const handlePickupChange = (date) => {
    setLocations({
      ...locations,
      pickup: date,
    });
  };

  const handleDropOffChange = (date) => {
    setLocations({
      ...locations,
      dropOff: date,
    });
  };

  const handleCostsChange = (e) => {
    setCosts({
      ...costs,
      [e.target.name]: e.target.value,
    });
  };

  const handleImageUpload = (event) => {
    const selectedFiles = Array.from(event.target.files);
    setImages(selectedFiles);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', {
      vehicle,
      availability,
      locations,
      costs,
      images,
    });
    // Reset form values
    setVehicle({ name: '', make: '', model: '' });
    setAvailability({ time: '', days: '' });
    setLocations({ pickup: null, dropOff: null });
    setCosts({ fare: '', deposit: '', otherCosts: '' });
    setImages([]);
  };

  return (

<form className="form-container" onSubmit={handleSubmit}>
      <div className="column">
        <h2>Vehicle Details</h2>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={vehicle.name}
            onChange={handleVehicleChange}
          />
        </label>
        <label>
          Make:
          <input
            type="text"
            name="make"
            value={vehicle.make}
            onChange={handleVehicleChange}
          />
        </label>
        <label>
          Model:
          <input
            type="text"
            name="model"
            value={vehicle.model}
            onChange={handleVehicleChange}
          />
        </label>
      </div>

      <div className="column">
        <h2>Availability</h2>
        <label>
          Time:
          <select
            name="time"
            value={availability.time}
            onChange={handleAvailabilityChange}
          >
            <option value="">Select a time</option>
            <option value="00:00">12:00 AM</option>
            <option value="01:00">1:00 AM</option>
            {/* Add other time options */}
          </select>
        </label>
        <label>
          Days:
          <select
            name="days"
            value={availability.days}
            onChange={handleAvailabilityChange}
          >
            <option value="">Select a number of days</option>
            <option value="1">1 day</option>
            <option value="2">2 days</option>
            {/* Add other day options */}
          </select>
        </label>
      </div>

      <div className="column">
        <h2>Pickup and Drop-off Locations</h2>
        <label>
          Pickup:
          <DatePicker
            selected={locations.pickup}
            onChange={handlePickupChange}
            dateFormat="MMMM d, yyyy"
            placeholderText="Select a pickup date"
          />
        </label>
        <label>
          Drop-off:
          <DatePicker
            selected={locations.dropOff}
            onChange={handleDropOffChange}
            dateFormat="MMMM d, yyyy"
            placeholderText="Select a drop-off date"
          />
        </label>
      </div>

      <div className="column">
        <h2>Costs</h2>
        <label>
          Fare:
          <input
            type="text"
            name="fare"
            value={costs.fare}
            onChange={handleCostsChange}
          />
        </label>
        <label>
          Deposit:
          <input
            type="text"
            name="deposit"
            value={costs.deposit}
            onChange={handleCostsChange}
          />
        </label>
        <label>
          Other Costs:
          <input
            type="text"
            name="otherCosts"
            value={costs.otherCosts}
            onChange={handleCostsChange}
          />
        </label>
      </div>

      <div className="column">
        <h2>Vehicle Images</h2>
        <div className="image-upload">
          <label>Vehicle Images (up to 3)</label>
          <input
            type="file"
            accept="image/*"
            multiple
            onChange={handleImageUpload}
          />
          <div className="image-preview">
            {images.map((image, index) => (
              <div className="image-preview-item" key={index}>
                <img src={URL.createObjectURL(image)} alt={`Preview ${index}`} />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="column">
        <button type="submit">Submit</button>
      </div>
    </form>


  );
};

// Database columns
// vehicle: name, make, model
// availability: time, days
// locations: pickup, dropOff
// costs: fare, deposit, otherCosts
// images: images
