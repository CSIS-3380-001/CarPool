const express = require('express');
const router = express.Router();

// Import the login route handler
const create = require('./create');

// Mount the login route handler at the /login path
router.use('/', create);

module.exports = router;


