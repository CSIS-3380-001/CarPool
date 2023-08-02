const express = require("express");
const router = express.Router();

let indexRouter = require('./routes/index');
let usersRouter = require('./routes/users');
let authRouter = require('./routes/auth');
let postsRouter = require('./routes/posts');

router.use('/', indexRouter);
router.use('/users', usersRouter);
router.use('/auth', authRouter);
router.use('/posts', postsRouter);

module.exports = router;