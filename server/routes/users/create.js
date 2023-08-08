let express = require('express');
let router = express.Router();
const User = require("../../models/user");

/* GET users listing. */
router.post('/', function(req, res, next) {
    console.log(req.body);

    console.log(User);

    let newUser = new User({
        name: req.body.username,
        username: req.body.username,
        email: req.body.email,
        password: req.body.password
    });

    newUser.save()
    .then((result) => {
        console.log(result);
        res.status(201).json({ 
            message: 'User created successfully',
            id: result._id
        });
    })
    .catch((err) => {
        console.log(err);
        res.status(500).json({ error: 'Failed to create user' });
    });
    
});

module.exports = router;
