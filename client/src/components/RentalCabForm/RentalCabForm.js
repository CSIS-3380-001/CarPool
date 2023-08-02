import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useNavigate } from "react-router-dom";
import "./RentalCabForm.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Table from "react-bootstrap/Table";
import ProgressBar from "react-bootstrap/ProgressBar";
import API from "../../services/api";

// const cloudinary = require('cloudinary').v2;

// // Configure Cloudinary
// cloudinary.config({
//   cloud_name: 'deumoji1t',
//   api_key: '835885467987919',
//   api_secret: 'UdmBKn2EIutr9pNRJ7E5RQveiwM',
// });



export const RentalCabForm = () => {
  const [showAlert, setShowAlert] = useState(false);
  const [showErrorAlert, setShowErrorAlert] = useState(false);
  const navigate = useNavigate();

  const id = localStorage.getItem("userId");
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [vehicle, setVehicle] = useState({
    name: "Toyota Camry",
    make: "Toyota",
    description: "A nice car",
    plateNumber: "",
  });

  const [availability, setAvailability] = useState({
    from_location: "New Westminster",
    time: "08:00",
    days: "2",
    city: "",
    pickup: new Date(),
    dropoff: new Date(),
  });

  const [costs, setCosts] = useState({
    fare: "150",
    deposit: "200",
    otherCosts: "50",
  });

  const [images, setImages] = useState([]);

  const handleVehicleChange = (e) => {
    setVehicle({
      ...vehicle,
      [e.target.name]: e.target.value,
    });
  };

  const handleAvailabilityChange = (date, name) => {
    console.log(date);
    setAvailability({
      ...availability,
      [name]: date,
    });
  };

  const handleCityChange = (e) => {
    setAvailability({
      ...availability,
      [e.target.name]: e.target.value,
    });
  }
  const handleCostsChange = (e) => {
    setCosts({
      ...costs,
      [e.target.name]: e.target.value,
    });
  };

  const handleImageUpload = (event) => {
    const selectedFiles = Array.from(event.target.files);

    setImages(selectedFiles[0]);
  };

  const handleNext = () => {
    setStep(step + 1);
  };

  const handlePrev = () => {
    setStep(step - 1);
  };

  const renderFormStep = () => {
    switch (step) {
      case 1:
        return (
          <div>
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
              Plate Number:
              <input
                type="text"
                name="plateNumber"
                value={vehicle.plateNumber}
                onChange={handleVehicleChange}
              />
            </label>
            <Button
              variant="success"
              onClick={handleNext}
              className="next-button"
            >
              Next
            </Button>{" "}
          </div>
        );
      case 2:
        return (
          <div>
            <h2>Availability</h2>
            <label>
              Pickup On:
              <DatePicker
                selected={availability.pickup}
                onChange={(date) => handleAvailabilityChange(date, "pickup")}
                dateFormat="MMMM d, yyyy"
                placeholderText="Select a pickup date"
                name="pickup" // Also include the name attribute
                value={availability.pickup}
              />
            </label>
            <label>
              Drop On:
              <DatePicker
                selected={availability.dropoff}
                onChange={(date) => handleAvailabilityChange(date, "dropoff")}
                dateFormat="MMMM d, yyyy"
                placeholderText="Select a drop date"
                name="dropoff" // Also include the name attribute
                value={availability.dropoff}
              />
            </label>
            <label>
              Description:
              <input
                type="text"
                name="description"
                value={vehicle.description}
                onChange={handleVehicleChange}
              />
              </label>
            <label>
              City: 
              <Form.Select
  aria-label="Default select example"
  name="city"
  value={availability.city}
  onChange={handleCityChange}
>
  <option value="">Select</option>
  <option value="Surrey">Surrey</option>
  <option value="New Westminster">New Westminster</option>
  <option value="Burnaby">Burnaby</option>
  <option value="Vancouver">Vancouver</option>
  <option value="Richmond">Richmond</option>
</Form.Select>

            </label>
            <Button
              variant="success"
              onClick={handleNext}
              className="next-button"
            >
              Next
            </Button>{" "}
            <Button
              variant="secondary"
              onClick={handlePrev}
              className="previous-button"
            >
              Previous
            </Button>{" "}
          </div>
        );
      case 3:
        return (
          <div>
            <h2>Images</h2>
            <label className="upload-image">
              Upload Images:
              <input
                type="file"
                name="images"
                multiple
                onChange={handleImageUpload}
              />
            </label>
            <Button
              variant="success"
              onClick={handleNext}
              className="next-button"
            >
              Next
            </Button>{" "}
            <Button
              variant="secondary"
              onClick={handlePrev}
              className="previous-button"
            >
              Previous
            </Button>{" "}
          </div>
        );
      case 4:
        return (
          <div>
            <form onSubmit={handleSubmit}>
              <h2>Pricing</h2>
              <label>
                Daily Rate:
                <input
                  type="text"
                  name="fare"
                  value={costs.fare}
                  onChange={handleCostsChange}
                />
              </label>
              <label>
                Deposit Amount:
                <input
                  type="text"
                  name="deposit"
                  value={costs.deposit}
                  onChange={handleCostsChange}
                />
              </label>
              <label>
                Late Return Fee:
                <input
                  type="text"
                  name="otherCosts"
                  value={costs.otherCosts}
                  onChange={handleCostsChange}
                />
              </label>
              <Button
                variant="success"
                onClick={handleSubmit}
                className="next-button"
              >
                Submit
              </Button>{" "}
              <Button
                variant="secondary"
                onClick={handlePrev}
                className="previous-button"
              >
                Previous
              </Button>{" "}
              <div className="form-summary">
                <h2>Summary</h2>
                <Table striped bordered hover>
                  <tbody>
                    <tr>
                      <th>Vehicle:</th>
                      <td>{vehicle.name}</td>
                    </tr>
                    <tr>
                      <th>Make:</th>
                      <td>{vehicle.make}</td>
                    </tr>
                    <tr>
                      <th>Plate Number:</th>
                      <td>{vehicle.plateNumber}</td>
                    </tr>
                    <tr>
                      <th>Availability:</th>
                      <td>
                        From - {availability.pickup.toDateString()}
                        {", "}
                        {availability.time} <br></br> Available For -{" "}
                        {availability.days} Days
                      </td>
                    </tr>
                    <tr>
                      <th>Deposit:</th>
                      <td>{costs.deposit}$</td>
                    </tr>
                    <tr>
                      <th>Fare Per Day:</th>
                      <td>{costs.fare}$</td>
                    </tr>
                    <tr>
                      <th>Late Return Fee:</th>
                      <td>{costs.otherCosts}$</td>
                    </tr>
                    <tr>
                      <th>Images Uploaded:</th>
                      <td>{images.length}</td>
                    </tr>
                  </tbody>
                </Table>
                <div className="image-preview">
                  {images.map((image, index) => (
                    <div className="image-preview-item" key={index}>
                      <img
                        src={URL.createObjectURL(image)}
                        alt={`Preview ${index}`}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </form>
          </div>
        );
      default:
        return null;
    }
  };

  const renderProgressBar = () => {
    const progress = ((step - 1) / 3) * 100; // Calculate progress percentage

    return (
      <ProgressBar animated now={progress} style={{ marginTop: "20px" }} />
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isSubmitting) {
      return;
    }

    // Disable submit button
    setIsSubmitting(true);

    // Perform signup logic here
    API.post("/posts", { vehicle, availability, images, id })
      .then((response) => {
        if (response.status === 201) {
          // If login is successful
          setShowAlert(true);

          setTimeout(() => {
            setShowAlert(false);
            setIsSubmitting(false);

            // Reset form fields
            setVehicle("Volvo", "XC90", "PLATE123");
            setAvailability("", "", "", new Date(), new Date());
            setImages("");

            // navigate to login
            navigate("/profile");
          }, 3000);
        }
      })
      .catch((err) => {
        console.log(err);
        setShowAlert(false);
        setIsSubmitting(false);
        setShowErrorAlert(true);

        setTimeout(() => {
          setShowErrorAlert(false);
        }, 3000);
      });
  };

  return (
    <div>
      {renderProgressBar()}
      {renderFormStep()}
    </div>
  );
};
