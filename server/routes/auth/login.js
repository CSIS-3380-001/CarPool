const express = require('express');
const router = express.Router();
const User = require("../../models/user");

// Define the login route handler
router.post('/', (req, res) => {
  // Handle the login request
    console.log(req.body);

    User.find({
      email: req.body.email
    })
    .then((result) => {
      if(result.length > 0) {
        console.log("sending response");
        res.status(200).json({
          users: result
        });
      } else {
        throw err();
      }
    })
    .catch((err) => {
      console.log(err);
      res.status(404).json({
        message: "User not found",
        err
      })
    })

});

module.exports = router;
