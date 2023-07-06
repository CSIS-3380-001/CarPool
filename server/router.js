const express = require("express");
const router = express.Router();

let indexRouter = require('./routes/index');
let usersRouter = require('./routes/users');
let authRouter = require('./routes/auth');

router.use('/', indexRouter);
router.use('/users', usersRouter);
router.use('/auth', authRouter);

module.exports = router;