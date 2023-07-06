const express = require('express');
const router = express.Router();

// Import the login route handler
const loginRouter = require('./login');

// Mount the login route handler at the /login path
router.use('/login', loginRouter);

module.exports = router;
