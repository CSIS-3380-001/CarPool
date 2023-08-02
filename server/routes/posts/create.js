let express = require('express');
let router = express.Router();


router.post('/', function(req, res, next) {
    console.log(req.body);

    console.log(Car);

    let newCar = new Car({
        email: "demo@gmail.com",
        carName: req.body.vehicle.name,
        desc: req.body.vehicle.description,
        available: req.body.availability.pickup,
        DropDate: req.body.availability.dropoff,
        city: "Surrey",
        carImageLink:"https://res.cloudinary.com/deumoji1t/image/upload/v1690236162/c%40b.comasasa.png",
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
        res.status(500).json({ error: 'Failed to create car' });
    });
    
});

module.exports = router;
