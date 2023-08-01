const express = require('express');
const router = express.Router();

// Import the login route handler
const find = require('./find');
const create = require('./create');
const update = require('./update');

// Mount the login route handler at the /login path
router.use('/', find);
router.use('/', create);
router.use('/', update);

module.exports = router;


