const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect("mongodb+srv://root:VRPd3ICLK6juCQCa@cluster0.dg4ocjz.mongodb.net/mydatabase?retryWrites=true&w=majority", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      // Other mongoose options
    });
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('Failed to connect to theeee MongoDB:', error);
    // Handle the error
    throw new Error(error);
  }
};



module.exports = connectDB;


