const express = require("express");
const router = express.Router();

let indexRouter = require('./routes/index');
let usersRouter = require('./routes/users');

router.use('/', indexRouter);
router.use('/users', usersRouter);

module.exports = router;