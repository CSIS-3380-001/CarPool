const http = require('http');
const dotenv = require('dotenv');
let createError = require('http-errors');
const express = require('express');
const path = require('path');
const logger = require('morgan');
const connectDB = require('./config/db');
const cors = require('cors');

let app = express();
let router = require('./router');

// Import .env vars
dotenv.config();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors());

// Routes
app.use(router);

/**
 * Create HTTP server.
 */
let port = process.env.PORT || '3000';
app.set('port', port);
let server = http.createServer(app);

/**
 * Listen on provided port, on all network interfaces.
 */
const start = async () => {
  await connectDB();
  server.listen(port);
  server.on('error', onError);
  server.on('listening', function () {
      console.log(`Listening on localhost:${port}`);
  });
}

// Spin up the server
start();

/**
 * Event listener for HTTP server "error" event.
 */

function onError(error) {
  if (error.syscall !== 'listen') {
    throw error;
  }

  let bind = typeof port === 'string'
    ? 'Pipe ' + port
    : 'Port ' + port;

  // handle specific listen errors with friendly messages
  switch (error.code) {
    case 'EACCES':
      console.error(bind + ' requires elevated privileges');
      process.exit(1);
      break;
    case 'EADDRINUSE':
      console.error(bind + ' is already in use');
      process.exit(1);
      break;
    default:
      throw error;
  }
}