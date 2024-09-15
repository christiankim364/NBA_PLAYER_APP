// create.app.js
//Sets up the express application (*Define routes that server will respond to, middleware (applies functions before they reach your routes)), configure settings, and handles errors. 
const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes');
const path = require('path');

const createApp = () => {
  const app = express();

  // Middleware
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));

  // Serve static files
  app.use(express.static(path.join(__dirname, 'public')));

  // Routes
  app.use('/', routes);

  return app;
};

module.exports = createApp;
