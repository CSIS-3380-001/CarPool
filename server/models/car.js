const mongoose = require("mongoose");

const carSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  carName: {
    type: String,
    required: true,
  },
  desc: {
    type: String,
    required: true,
  },
  available: {
    type: Date,
    required: true,
  },
  DropDate: {
    type: Date,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  carImageLink: { // New field to store the car image link
    type: String,
    required: true,
  },
});

const Car = mongoose.model("Car", carSchema);

module.exports = Car;
