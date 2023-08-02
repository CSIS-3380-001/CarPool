let express = require('express');
let router = express.Router();
const Car = require('../../models/car');

const carImageLinks = [
    "https://i.imgur.com/IyEp7mf.jpeg",
    "https://i.imgur.com/j2XIS80.jpeg",
    "https://i.imgur.com/IaY6K29.jpeg",
    "https://i.imgur.com/pHAxW1t.jpeg",
  ];

router.post('/', function(req, res, next) {
    console.log(req.body);

    const randomIndex = Math.floor(Math.random() * carImageLinks.length);
    console.log(Car);

    let newCar = new Car({
        email: "demo@gmail.com",
        carName: req.body.vehicle.name,
        desc: req.body.vehicle.description,
        available: req.body.availability.pickup,
        DropDate: req.body.availability.dropoff,
        city: req.body.availability.city,
        carImageLink: carImageLinks[randomIndex],
        userId: req.body.id,
    });

    newCar.save()
    .then((result) => {
        console.log(result);
        res.status(201).json({ 
            message: 'Car created successfully',
            id: result._id
        });
    })
    .catch((err) => {
        res.status(500).json({ error: 'Failed to create car', err });
    });
    
});

module.exports = router;
